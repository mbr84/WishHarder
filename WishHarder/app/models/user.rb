class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :profile_img
  validates_attachment_content_type :profile_img, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token


  def self.find_by_credentials(parameters)
    username = parameters[:usermane]
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
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
