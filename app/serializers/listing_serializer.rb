class ListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :seller, :conversations, :categories, :tags
end