class Listing < ApplicationRecord
  belongs_to :seller
  has_many :conversations
  has_many :categories
  has_many :tags, through: :categories


  def seller_address
    self.seller.user.street_address
  end

end
