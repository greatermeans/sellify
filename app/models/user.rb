class User < ApplicationRecord
  has_one :seller
  has_many :communities
  has_many :conversations
  has_many :organizations, through: :communities
  has_many :listings, through: :seller
  has_secure_password

  def address
    [self.street_address, self.city, self.state].join(', ')
  end

  def name
    self.first_name + ' ' + self.last_name
  end

  def is_seller?
    self.seller.listings.length != 0
  end


end
