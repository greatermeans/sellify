class CreateOrglistings < ActiveRecord::Migration[5.0]
  def change
    create_table :orglistings do |t|
      t.integer :organization_id
      t.integer :listing_id

      t.timestamps
    end
  end
end
