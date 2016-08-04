class FixColumnType < ActiveRecord::Migration
  def change
    remove_column :rewardings, :customer_id
    add_column :rewardings, :customer_id, :string
  end
end
