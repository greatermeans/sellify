FactoryGirl.define do
  factory :user do
    first_name            {Faker::Name.first_name}
    last_name             {Faker::Name.last_name}
    phone                 1231231234
    email                 {Faker::Internet.email}
    zipcode               {Faker::Address.zip_code}
    password              'one'
  end
end
