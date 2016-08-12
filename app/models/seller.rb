class Seller < ApplicationRecord
  belongs_to :user
  has_many :listings
  has_many :message_threads



end
