class ListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :conversations, :categories, :tags, :image
  belongs_to :user
  has_many :conversations
  has_many :categories
  has_many :tags, through: :categories

end
