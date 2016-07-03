class AddLocationColumn < ActiveRecord::Migration
  def change
    add_column :projects, :city, :string, null: false
    add_column :projects, :state, :string, null: false
  end
end
