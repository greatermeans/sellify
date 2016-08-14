class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages, force: :cascade do |t|
      t.integer :user_id
      t.integer :seller_id
      t.string :subject
      t.text :content
    end
  end
end
