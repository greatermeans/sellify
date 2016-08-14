class Listing < ApplicationRecord
  belongs_to :seller
  has_many :conversations
  has_many :categories
  has_many :tags, through: :categories

  def is_available?
    self.status == 'open'
  end

  def seller_address
    self.seller.address
  end

end
