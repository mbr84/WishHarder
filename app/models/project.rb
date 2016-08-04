class Project < ActiveRecord::Base
  validates :title, :content, :duration, :goal, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  has_many :rewards
  has_many :rewardings, through: :rewards
  has_many :backers, through: :rewardings, source: :backer

  def self.clean_and_bill

    Project.all.each do |project|
      if (project.duration - (Time.zone.now - project.created_at).to_i / 1.day) < 0
        if project.pledged >= project.goal
          project.rewardings.each do |rewarding|
            rewarding.complete_transaction
          end
        end
        Project.destroy(project)
      end
    end
  end

end
