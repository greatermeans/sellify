require 'open-uri'

module Api
  module V1

		class ListingsController < ApplicationController
      @@counter = 1

			def new
			end

      def create
        listingData = JSON.parse(params[:listing])
        file = params[:image]
        root_dir = Rails.root.join('app','assets','listings','images',"#{listingData["title"]}.jpg")
        File.open(root_dir,'wb') { |f| f.write(file.read)}
        listingData["image"] = root_dir
        @listing = Listing.create(listingData)
        render json: @listing, include: ['user']
      end

			def show
			end

			def index
				render json: current_user.dashboard_listings, include: ['tags','categories']
			end

		end
	end
end
