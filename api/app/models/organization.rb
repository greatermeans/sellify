class Organization < ApplicationRecord
  has_many :communities
  has_many :orglistings
  has_many :listings, through: :orglistings
  has_many :users, through: :communities

  def get_listings
    self.listings
  end

end
