class Organization < ApplicationRecord
  has_many :communities
  has_many :orglistings
  has_many :listings, through: :orglistings
  has_many :users, through: :communities

  def all_listings
    Listing.joins({user: :organizations}).where('organizations.id = ?', self.id)
  end

end
