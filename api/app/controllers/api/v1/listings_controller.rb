module Api
  module V1

		class ListingsController < ApplicationController

			def new
			end

      def create
        new_seller = Seller.find_or_create_by(user_id: user_params[:user_id])
        binding.pry
        listing_params[:seller_id] = new_seller.id
        @listing = Listing.create(listing_params)
        render json: @listing, include: ['seller', 'user']
      end

			def show
			end

			def index
				render json: Listing.all, include: ['sellers','users']
			end

      private


      def listing_params
        params.require(:listing).permit(:title, :description, :price, :location, :image,:seller_id)
      end

      def user_params
        params.require(:listing).permit(:user_id)
      end


		end
	end
end
