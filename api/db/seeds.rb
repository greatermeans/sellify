User.destroy_all
Listing.destroy_all
Community.destroy_all
Orglisting.destroy_all
Tag.destroy_all
Organization.destroy_all
Category.destroy_all

9.times do
  FactoryGirl.create(:organization)
end

100.times do
	FactoryGirl.create(:tag)
end

10.times do
	FactoryGirl.create(:user)
end

50.times do
	FactoryGirl.create(:listing)
	sleep 0.5
end

40.times do
  FactoryGirl.create(:orglisting)
end

20.times do
	FactoryGirl.create(:community)
end

100.times do
	FactoryGirl.create(:category)
end
