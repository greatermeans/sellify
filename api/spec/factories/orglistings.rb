FactoryGirl.define do
  factory :orglisting do
    organization {Organization.all.sample}
    listing {Listing.all.sample}
  end
end
