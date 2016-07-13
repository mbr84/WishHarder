class Api::CheckoutsController < ApplicationController

  def create
    user = current_user
    checkout_params = params[:checkout]
    if user && checkout_params
      checkout = user.checkouts.create(
        reward_id: checkout_params[:reward_id],
        cost: checkout_params[:cost]
      )
      if checkout.save
        @checkout = Checkout.includes(:reward, :project,
          :author).find(checkout.id)
        render :show
      else
        render json: {}, status: 400
      end
    else
      render json: {}, status: 403
    end
  end

  def show
    user = current_user
    checkout = Checkout.find(params[:id])
    if user && checkout
      if checkout.user_id == user.id
        @checkout = Checkout.includes(:reward, :project,
          :project_creator).find(checkout.id)
        render :show
      else
        render json: {}, status: 403
      end
    else
      render json: {}, status: 401
    end
  end

end
