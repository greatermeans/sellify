FactoryGirl.define do
  factory :tag do
    name (1..3).to_a.map { |num| Faker::Commerce.department }.last
  end
end
