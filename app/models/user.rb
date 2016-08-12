class User < ApplicationRecord
  has_one :seller
  has_many :organizations_users
  has_many :transactions
  has_many :organizations, through: :organizations_users

  def get_seller_id
    self.seller_id
  end

  def get_my_listings
    Listings.joins(:users).where(seller_id: self.id)
  end

  def get_my_transactions
    self.transactions
  end

  def full_address
    [self.street_address, self.city, self.state].join(', ')
  end

  def is_seller?
    self.seller.listings.length != 0
  end


end
