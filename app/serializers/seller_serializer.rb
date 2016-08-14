class SellerSerializer < ActiveModel::Serializer
  attributes :id, :user
  has_many :listings
end