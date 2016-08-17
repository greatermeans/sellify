class Listing < ApplicationRecord
  belongs_to :user
  has_many :orglistings
  has_many :organizations, through: :orglistings
  has_many :conversations
  has_many :categories
  has_many :tags, through: :categories

end
