class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.integer :buyer_id
      t.integer :listing_id
      t.string :status
      t.timestamps
    end
  end
end
