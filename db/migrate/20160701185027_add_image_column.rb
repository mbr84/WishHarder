class AddImageColumn < ActiveRecord::Migration
  def change
    add_column :projects, :primary_img, :string, null: false
  end
end
