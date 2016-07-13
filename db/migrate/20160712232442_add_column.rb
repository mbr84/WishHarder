class AddColumn < ActiveRecord::Migration
  def change
    add_column :checkouts, :cost, :integer, null: false
  end
end
