class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.integer :author_id
      t.integer :category_id
      t.boolean :complete, null: false
      t.integer :duration, null: false
      t.integer :goal, null: false
      t.integer :pledged
      t.boolean :featured

      t.timestamps null: false
    end
    add_index :projects, :author_id
    add_index :projects, :category_id
  end
end
