FactoryGirl.define do
  factory :organizations_users do
    organization_id            1
    user_id                    rand(1..5)
  end
end
