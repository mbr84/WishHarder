class RemoveColumns < ActiveRecord::Migration
  def change
    remove_column :users, :profile_img_content_type
    remove_column :users, :profile_img_file_size
    remove_column :users, :profile_img_updated_at
    remove_column :users, :profile_img_file_name
  end
end
