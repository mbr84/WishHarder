class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :rewards, :value, :cost
  end
end
