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

  def all_listings_for_orgs
    list = []
    self.organizations.map {|org| list << org.get_listings}
    return list.flatten
  end

  def dashboard_listings
    self.all_listings_for_orgs.first(6)
  end

end
