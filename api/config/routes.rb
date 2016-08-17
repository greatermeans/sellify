Rails.application.routes.draw do
	namespace :api do
    	namespace :v1 do
    		resources :users
    		resources :listings
        resources :organizations

    		get '/users/:id/listings', to: 'users#show_listings'
    		get '/users/:id/conversations', to: 'users#show_conversations'
    	end
    end
    post '/authorize', to: 'sessions#create'

end
