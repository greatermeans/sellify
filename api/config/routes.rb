Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
	namespace :api do
    	namespace :v1 do
    		resources :users
    		resources :listings
            resources :organizations	
			post '/users/:id/add_org', to: 'users#add_org'
    		resources :sellers
            resources :organizations
            mount Knock::Engine => "/knock"
    		get '/users/:id/listings', to: 'users#show_listings'
    		get '/users/:id/conversations', to: 'users#show_conversations'
    	end
    end
end
