class Reward < ActiveRecord::Base
  validates :name, :description, :project_id, null: false

  belongs_to :project
  has_many :rewardings
  has_many :checkouts
  has_many :backers, through: :rewardings
end
