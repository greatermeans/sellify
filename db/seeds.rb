FactoryGirl.define do
  factory :user do
    first_name            Faker::Name.first_name
    last_name             Faker::Name.last_name
    phone                 Faker::PhoneNumber.cell_phone
    email                 Faker::Internet.email
    street_address        Faker::
    city
    state
    password              "password"
    password_confirmation "password"
  end

  factory :tags do
    first_name            Faker::Name.first_name
    last_name             Faker::Name.last_name
    phone                 Faker::PhoneNumber.cell_phone
    email                 Faker::Internet.email
    password              "password"
    password_confirmation "password"
  end

  factory :listing do
    seller_id            Faker::Name.first_name
    title                Faker::Name.last_name
    description          Faker::PhoneNumber.cell_phone
    location             Faker::Internet.email
    image                 "password"
    price                 "password"
    sold?                Faker::
  end

  factory :organization do
    name            Faker::Name.first_name
  end


end
