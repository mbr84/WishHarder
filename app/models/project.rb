class Project < ActiveRecord::Base
  validates :title, :content, :duration, :goal, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

end
