class Listing < ApplicationRecord
  belongs_to :seller
  has_many :listings_tags
  has_many :tags, through: :listings_tags
end
