class CreateCommunities < ActiveRecord::Migration[5.0]
  def change
    create_table :communities do |t|
      t.integer :user_id
      t.integer :organization_id

      t.timestamps
    end
  end
end
