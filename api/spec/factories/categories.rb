FactoryGirl.define do
  factory :category do
    listing {Listing.all.sample}
    tag {Tag.all.sample}
  end
end
