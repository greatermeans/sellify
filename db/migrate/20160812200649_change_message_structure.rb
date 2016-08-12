class ChangeMessageStructure < ActiveRecord::Migration[5.0]
  def change
    drop_table :message_threads
    drop_table :messages
    create_table :messages, force: :cascade do |t|
      t.integer "user_id"
      t.integer "seller_id"
      t.string "subject"
      t.text "content"
    end
  end
end
