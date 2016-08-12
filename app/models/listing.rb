class Listing < ApplicationRecord
  belongs_to :seller
  has_many :transactions
  has_many :listings_tags
  has_many :tags, through: :listings_tags

  def is_available?
    self.status == 'open'
  end

  def seller_address
    self.seller.address
  end

end
