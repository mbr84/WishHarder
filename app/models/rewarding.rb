class Rewarding < ActiveRecord::Base
  validates :reward_id, :backer_id, presence: true

  belongs_to :reward

  belongs_to :backer,
    primary_key: :id,
    foreign_key: :backer_id,
    class_name: "User"
end
