class AddIndexToColumn < ActiveRecord::Migration
  def change
    add_index :rewardings, :customer_id, unique: true
  end
end
