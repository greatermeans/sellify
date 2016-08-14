class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email, :phone, :seller, :communities, :transactions, :organizations, :listings
end