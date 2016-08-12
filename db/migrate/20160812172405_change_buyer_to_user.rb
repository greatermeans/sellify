class ChangeBuyerToUser < ActiveRecord::Migration[5.0]
  def change
    drop_table :transactions
    create_table "transactions", force: :cascade do |t|
      t.integer  "user_id"
      t.integer  "listing_id"
      t.string   "status"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
  end
end
