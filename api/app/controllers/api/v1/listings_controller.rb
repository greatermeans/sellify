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
				render json: Listing.all, include: ['users']
			end

      # private
      #
      #
      # def listing_params
      #   params.require(:listing).permit(:title, :description, :price, :location, :image, :user_id)
      # end

		end
	end
end
