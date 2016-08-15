class CommunitySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :organization_id
  	belongs_to :organization
	belongs_to :user
end