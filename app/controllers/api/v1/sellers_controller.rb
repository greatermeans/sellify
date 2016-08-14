module Api
  module V1

		class SellersController < ApplicationController

			def index
				@sellers = Seller.joins(:listings)
				render json: @sellers, include: ['listings'] 
			end

		end
	end
end