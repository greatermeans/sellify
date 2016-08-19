FactoryGirl.define do
  factory :listing do
    user				         { User.all.sample }
    title                { Faker::Commerce.product_name }
    description          { Faker::Lorem.sentence }
    # image                { Faker::Avatar.image }
    price                { Faker::Commerce.price }
    sold?                false
  end
end
