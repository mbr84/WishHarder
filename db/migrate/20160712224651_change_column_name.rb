class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :checkouts, :pledge_amount, :cost
  end
end
