class AddColumnToPledges < ActiveRecord::Migration
  def change
    add_column :rewardings, :stripe_customer_id, :integer
  end
end
