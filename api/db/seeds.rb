User.destroy_all
Seller.destroy_all
Listing.destroy_all
Community.destroy_all
Tag.destroy_all
Organization.destroy_all
Category.destroy_all

9.times do 
  FactoryGirl.create(:organization)
end

10.times do
	FactoryGirl.create(:tag)
end

10.times do
	FactoryGirl.create(:user)
end

FactoryGirl.create(:seller)

5.times do
	FactoryGirl.create(:listing)
	sleep 1
end

10.times do
	FactoryGirl.create(:community)
end

10.times do
	FactoryGirl.create(:category)
end
