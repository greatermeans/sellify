class Orglisting < ApplicationRecord
  belongs_to :organization
  belongs_to :listing
end
