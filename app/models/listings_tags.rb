class ListingsTags < ApplicationRecord
  belongs_to :listing
  belongs_to :tag
end
