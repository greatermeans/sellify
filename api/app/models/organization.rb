class Organization < ApplicationRecord
  has_many :communities
  has_many :users, through: :communities

  def all_listings
    Listing.joins({seller: {user: :organizations}}).where('organizations.id = ?', self.id)  
  end

end
