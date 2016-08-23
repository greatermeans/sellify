require 'open-uri'
require 'aws-sdk'

module Api
  module V1

		class ListingsController < ApplicationController
      @@counter = 1

			def new
			end

      def create
        Aws.config.update({credentials: Aws::Credentials.new(ENV["API_KEY"], ENV["SECRET_KEY"])})
        listingData = JSON.parse(params[:listing])
        file = params[:image]
        root_dir = Rails.root.join('app','assets','images',"#{listingData["title"]}.jpg")
        File.open(root_dir,'wb') { |f| f.write(file.read)}
        listingData["image"] = root_dir
        binding.pry
        s3 = Aws::S3::Resource.new(region:'us-east-1')
        obj = s3.bucket('sellify').object("#{listingData["title"]}.jpg")
        obj.upload_file("#{Rails.root}/app/assets/images/#{listingData["title"]}.jpg")
        @listing = Listing.create(listingData)
        render json: @listing, include: ['user']
      end

			def show
			end

			def index
				render json: Listing.all, include: ['users']
			end

		end
	end
end
