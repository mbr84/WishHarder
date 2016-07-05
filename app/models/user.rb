class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :projects,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Project"

  has_many :rewardings,
    primary_key: :id,
    foreign_key: :backer_id,
    class_name: "Rewarding"

  has_many :rewards, through: :rewardings
  has_many :projects_backed, through: :rewards, source: :projects


  def self.find_by_credentials(parameters)
    username = parameters[:username]
    password = parameters[:password]

    user = User.find_by(username: username)
    user.try(:is_password?, password) ? user : nil
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
