class AddColumnToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :blurb, :text, null: false
  end
end
