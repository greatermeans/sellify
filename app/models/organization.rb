class Organization < ApplicationRecord
  has_many :communities
  has_many :users, through: :communities
end
