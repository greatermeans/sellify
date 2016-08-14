class ListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price
  belongs_to :seller
  has_many :transactions
  has_many :categories
  has_many :tags, through: :categories
end