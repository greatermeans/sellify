class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.integer :user_id
      t.string :title
      t.string :description
      t.string :zipcode
      t.string :image
      t.float :price
      t.boolean :sold?
      t.timestamps
    end
  end
end
