class Api::RewardingsController < ApplicationController

  def create
    Stripe.api_key = ENV["stripe_secret_test_key"]
    if rewarding_params && rewarding_params[:id] && rewarding_params[:stripeToken]
      checkout_id = rewarding_params[:id]
      token = rewarding_params[:stripeToken]
      checkout = Checkout.find(checkout_id)
      begin
        Stripe::Charge.create(
          source: token,
          amount: checkout.cost,
          currency: "usd",
          description: "SEE ME CHARGE"
        )
      rescue Stripe::StripeError => e
        render json: {}, status: 418
        return
      end
      rewarding = Rewarding.new(
        backer_id: checkout.user_id,
        reward_id: checkout.reward_id,
      )
      if rewarding.save
        checkout.destroy
        rewarding.reward.project.pledged += rewarding.reward.cost
        rewarding.reward.project.save!
        render json: {}, status: 200
      else
        render json: {}, status: 400
      end
    else
      render json: {}, status: 400
    end
  end

  private

  def rewarding_params
    params.require(:rewarding).permit(:id, :stripeToken )
  end
end
