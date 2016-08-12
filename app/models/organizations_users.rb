class OrganizationsUsers < ApplicationRecord
  belongs_to :organization
  belongs_to :user
end
