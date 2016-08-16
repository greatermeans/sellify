class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :seller
  has_one :seller
  has_many :communities
  has_many :conversations
  has_many :organizations, through: :communities
  has_many :listings, through: :seller
end
