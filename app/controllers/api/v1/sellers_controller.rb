module Api
  module V1

		class SellersController < ApplicationController

			def index
				render json: Seller.all, include: ['listings','seller'] 
			end

		end
	end
end