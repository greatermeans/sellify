class Tag < ApplicationRecord
  has_many :categories
  has_many :listings, through: :categories

  def oldest_first
    self.listings.order(created_at: :asc)
  end

  def newest_first
    self.listings.order(created_at: :desc)
  end

  def cheapest
    self.listings.order(price: :asc)
  end

  def most_expensive
    self.listings.order(price: :desc)
  end

  #closest

end
