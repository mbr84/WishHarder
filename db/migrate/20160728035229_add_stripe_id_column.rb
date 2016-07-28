class AddStripeIdColumn < ActiveRecord::Migration
  def change
    add_column :rewardings, :stripe_customer_id, :string
    add_index :rewardings, :stripe_customer_id
  end
end
