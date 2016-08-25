require 'open-uri'
require 'aws-sdk'

module Api
  module V1

		class ListingsController < ApplicationController
      @@counter = 1

			def new
			end

      def create
        Aws.config.update({credentials: Aws::Credentials.new(Rails.application.secrets.API_KEY, Rails.application.secrets.SECRET_KEY)})
        listingData = JSON.parse(params[:listing])
        file = params[:image]
        root_dir = Rails.root.join('app','assets','images',"#{listingData["title"]}.jpg")
        File.open(root_dir,'wb') { |f| f.write(file.read)}
        s3 = Aws::S3::Resource.new(region:'us-east-1')
        obj = s3.bucket('sellify').object("#{listingData["title"]}.jpg")
        obj.upload_file("#{Rails.root}/app/assets/images/#{listingData["title"]}.jpg")
        listingData["image"] = "http://s3.amazonaws.com/sellify/#{listingData["title"]}.jpg"
        @listing = Listing.create(listingData)
        render json: @listing, include: ['user']
      end

			def show
        @listing = Listing.find(params[:id].to_i)
        render json: @listing, include: ['tags','categories']
			end

      def all_listings
        render json: current_user.all_listings, include: ['tags','categories']
      end

			def index
				render json: current_user.dashboard_listings, include: ['tags','categories']
			end

		end
	end
end
