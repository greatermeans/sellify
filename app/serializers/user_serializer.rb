class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email, :phone, :seller, :communities, :conversations, :organizations, :listings
end