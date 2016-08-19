class Listing < ApplicationRecord
  belongs_to :user
  has_many :orglistings
  has_many :organizations, through: :orglistings
  has_many :conversations
  has_many :categories
  has_many :tags, through: :categories
  # has_attached_file :image,
  #                   :storage => :database,
  #                   url: "/assets/listings/images/:basename.:extension",
  #                   path: ":rails_root/app/assets/listings/images/:basename.:extension"
  # validates_attachment_content_type :image, content_type: ['image/jpg', 'image/png', 'image/bmp']
  #

end
