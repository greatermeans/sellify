require 'open-uri'

module Api
  module V1

		class ListingsController < ApplicationController


			def new
			end

      def create
        binding.pry
        @listing = Listing.create(lp)
        render json: @listing, include: ['user']
      end

			def show
			end

			def index
				render json: Listing.all, include: ['users']
			end

      def add_image
        counter = 1
        url = image_params[:image].split("blob:").pop
        root_dir = Rails.root.join('app','assets','listings','images','#{counter}.jpg')
        counter += 1
        File.open(root_dir,'wb') { |f| f.write(open(url).read)}
        binding.pry
      end

      private


      def listing_params
        params.require(:listing).permit(:title, :description, :price, :location, :user_id)
      end

      def image_params
        params.permit(:image)
      end

		end
	end
end
