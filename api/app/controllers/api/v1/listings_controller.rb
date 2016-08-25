module Api
  module V1

		class ListingsController < ApplicationController

      @@counter = 1

      def create
        @listing_params = parse_params
        save_image
        @listing_params["image"] = "http://s3.amazonaws.com/sellify/#{filepath}"
        @listing_params['user_id'] = current_user.id
        @listing = Listing.new(@listing_params)
        @listing.tags = find_or_create_tags
        @listing.save
        @@counter += 1
        render json: @listing, include: ['user','tags']
      end

      def destroy
        Listing.find(params[:id].to_i).destroy
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

      private

      def filepath
        "#{@listing_params["title"] + @@counter.to_s}.jpg"
      end


      def upload_to_host
        s3 = Aws::S3::Resource.new(region:'us-east-1')
        obj = s3.bucket('sellify').object("#{filepath}")
        obj.upload_file("#{Rails.root}/app/assets/images/#{filepath}")
      end

      def save_image
        root_dir = Rails.root.join('app','assets','images',filepath)
        File.open(root_dir,'wb') { |f| f.write(params[:image].read)}
        validate_aws
        upload_to_host
      end

      def validate_aws
        Aws.config.update({credentials: Aws::Credentials.new(Rails.application.secrets.API_KEY, Rails.application.secrets.SECRET_KEY)})
      end

      def find_or_create_tags
        listing_tags = @tags.split(", ").map do |tagname|
          Tag.find_or_create_by(name: tagname)
        end
      end

      def parse_params
          parse_params = JSON.parse(params["listing"])
          @tags = parse_params.delete("tags")
          parse_params
      end


		end
	end
end
