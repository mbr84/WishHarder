class AddAttachmentProfileImgToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :profile_img
    end
  end

  def self.down
    remove_attachment :users, :profile_img
  end
end
