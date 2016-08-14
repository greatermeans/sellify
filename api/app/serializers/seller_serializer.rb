class SellerSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  has_many :listings
end