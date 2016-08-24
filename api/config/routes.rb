Rails.application.routes.draw do
	namespace :api do
    	namespace :v1 do
        	resources :users
            resources :messages
        	resources :listings
            resources :organizations
            post '/signin', to: 'authentication#authenticate'
    		post '/users/:id/join_org', to: 'users#join_org'
            get '/users/:id/listings', to: 'users#show_listings'
        	get '/users/:id/conversations', to: 'users#show_conversations'
					get '/all_listings', to: 'listings#all_listings'
      end
    end
end
