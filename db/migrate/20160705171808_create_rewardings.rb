class CreateRewardings < ActiveRecord::Migration
  def change
    create_table :rewardings do |t|
      t.integer :reward_id, null: false
      t.integer :backer_id, null: false

      t.timestamps null: false
    end
    add_index :rewardings, :reward_id
    add_index :rewardings, :backer_id
  end
end
