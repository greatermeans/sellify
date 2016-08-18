class User < ApplicationRecord
  has_many :communities
  has_many :conversations
  has_many :organizations, through: :communities
  has_many :listings
  has_secure_password

  def address
    [street_address, city, state].join(', ')
  end

  def name
    first_name + ' ' + last_name
  end

  def all_listings
    self.organizations.map {|org| org.get_listings}.flatten
  end

  def dashboard_listings
    Listing.where(id: all_listings.map(&:id)).order(created_at: :desc).first(6)
  end

end
