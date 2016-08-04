class Rewarding < ActiveRecord::Base
  validates :reward_id, :backer_id, presence: true

  belongs_to :reward

  belongs_to :backer,
    primary_key: :id,
    foreign_key: :backer_id,
    class_name: "User"

    def complete_transaction
      Stripe.api_key = ENV["stripe_secret_test_key"]
      Stripe::Charge.create(
        amount: self.reward.cost,
        currency: "usd",
        customer: self.customer_id
      )
    end
end
