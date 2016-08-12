User.destroy_all
Seller.destroy_all
Listing.destroy_all
Community.destroy_all
Tag.destroy_all
Organization.destroy_all

FactoryGirl.create(:organization)

10.times do 
	FactoryGirl.create(:user)
end

FactoryGirl.create(:seller)

5.times do 
	FactoryGirl.create(:listing)
end

10.times do
	FactoryGirl.create(:tag)
end

FactoryGirl.create(:community)