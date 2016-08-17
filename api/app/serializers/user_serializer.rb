class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :dashboard_listings
  has_many :communities
  has_many :conversations
  has_many :organizations, through: :communities
  has_many :listings
end
