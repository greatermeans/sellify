class Organization < ApplicationRecord
  has_many :organizations_users
  has_many :users, through: :organizations_users

  def all_listings
    self.users.join(:listings).where(seller_id: user.id)
  end

end
