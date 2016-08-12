class MessageThread < ApplicationRecord
  belongs_to :user
  belongs_to :seller
end
