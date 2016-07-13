class FixColumn < ActiveRecord::Migration
  def change
    remove_column :checkouts, :cost
  end
end
