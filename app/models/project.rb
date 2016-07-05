class Project < ActiveRecord::Base
  validates :title, :content, :duration, :goal, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  has_many :rewards
  has_many :rewardings, through: :rewards
  has_many :backers, through: :rewardings, source: :backer

end
