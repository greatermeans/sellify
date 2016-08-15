class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :communities
  has_many :users, through: :communities
end