class AddBlobToListings < ActiveRecord::Migration[5.0]
  def change
    add_column(:listings, :image_blob, :binary)
  end

end
