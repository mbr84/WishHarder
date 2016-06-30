class Project < ActiveRecord::Base
  validates :tite, :content, :duration, :interval, :goal, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

end
