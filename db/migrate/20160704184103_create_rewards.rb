class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.string :name, null: false
      t.integer :cost, null: false
      t.text :description, null: false
      t.integer :project_id, null: false

      t.timestamps null: false
    end
    add_index :rewards, :project_id
  end
end
