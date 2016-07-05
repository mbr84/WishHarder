class Reward < ActiveRecord::Base
  validates :name, :description, :value, :project_id, null: false

  belongs_to :project
  has_many :rewardings
  has_many :backers, through: :rewardings
end
