FactoryGirl.define do
  factory :organization do
    name   {Faker::University.name}
  end
end
