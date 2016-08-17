module Api
  module V1

		class ListingsController < ApplicationController

			def new
			end

      def create
        @listing = Listing.create(listing_params)
        render json: @listing, include: ['user']
      end

			def show
			end

			def index
				render json: Listing.all, include: ['users']
			end

      private


      def listing_params
        params.require(:listing).permit(:title, :description, :price, :location, :image, :user_id)
      end

		end
	end
end
