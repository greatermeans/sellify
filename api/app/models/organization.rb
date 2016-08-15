class Organization < ApplicationRecord
  has_many :communities
  has_many :users, through: :communities

  def all_listings
    self.users.joins(:listings).where(seller_id: user.id)
  end

end
