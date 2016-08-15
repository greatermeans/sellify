FactoryGirl.define do
  factory :seller do
  	user {User.first}
  end
end
