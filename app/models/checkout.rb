class Checkout < ActiveRecord::Base
  validates :user_id, :reward_id, :cost, presence: true

  belongs_to :user
  belongs_to :reward
  has_one :project, through: :reward
  has_one :author, through: :project, source: :author
end
