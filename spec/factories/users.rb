FactoryGirl.define do
  factory :user do
    first_name            Faker::Name.first_name
    last_name             Faker::Name.last_name
    phone                 1231231234
    email                 Faker::Internet.email
    street_address        Faker::Address.street_address
    city                  Faker::Address.city
    state                 Faker::Address.state
    password              Faker::Internet.password
  end
end
