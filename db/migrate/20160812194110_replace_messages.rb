class ReplaceMessages < ActiveRecord::Migration[5.0]
  def change
    drop_table :messages
    create_table :message_threads, force: :cascade do |t|
      t.integer  "user_id"
      t.integer "seller_id"
    end
    create_table :messages, force: :cascade do |t|
      t.integer "message_thread_id"
      t.text "content"
    end
  end
end
