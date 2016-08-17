require_relative '../rails_helper'

describe Tag do
  before(:all) do
    @user1 = User.create(id: 1, password: "heya")
    @tag1 = Tag.create(id: 1, name: "metal")
    def make_listings
      @listing1 = Listing.create(id: 1, user_id: 1, title: "Table", description: "A big brown Table", location: "West Village", image: nil, price: 30.5, sold?: false)
      sleep 1
      @listing2 = Listing.create(id: 2, user_id: 1, title: "Chair", description: "A small brown chair", location: "West Village", image: nil, price: 20.0, sold?: false)
      sleep 1
      @listing3 = Listing.create(id: 3, user_id: 1, title: "Fake Fruit Bowl", description: "A center decoration for your table", location: "West Village", image: nil, price: 50.0, sold?: false)
    end
    make_listings
    @category1 = Category.create(id: 1, tag_id: 1, listing_id: 1)
    @category2 = Category.create(id: 2, tag_id: 1, listing_id: 2)
    @category3 = Category.create(id: 3, tag_id: 1, listing_id: 3)
  end

  describe "newest_first" do
    it "should return the most recent listings first by tag name" do
      expect(@tag1.newest_first).to eq([@listing3, @listing2, @listing1])
    end
  end

  describe "oldest_first" do
    it "should return the oldest listings first by tag name" do
      expect(@tag1.oldest_first).to eq([@listing1, @listing2, @listing3])
    end
  end

  describe "cheapest" do
    it "should return items in order from cheapest" do
      expect(@tag1.cheapest).to eq([@listing2, @listing1, @listing3])
    end
  end

  describe "most_expensive" do
    it "should return items in order from most expensive down" do
      expect(@tag1.most_expensive).to eq([@listing3, @listing1, @listing2])
    end
  end
end
