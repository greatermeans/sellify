class ListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :seller, :conversations, :categories, :tags
  belongs_to :seller
  has_many :conversations
  has_many :categories
  has_many :tags, through: :categories

end