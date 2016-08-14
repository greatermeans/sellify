module Api
  module V1

		class ListingsController < ApplicationController

			def new
			end

			def create
			end

			def show
			end

			def index
				render json: Listing.all, include: ['sellers','users']
			end



		end
	end
end