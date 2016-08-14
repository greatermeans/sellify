class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.integer :seller_id
      t.string :title
      t.string :description
      t.string :location
      t.string :image
      t.float :price
      t.boolean :sold?
      t.timestamps
    end
  end
end
