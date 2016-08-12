class User < ApplicationRecord
  has_one :buyer
  has_one :seller
  has_many :organizations_users
  has_many :organizations, through: :organizations_users
end
