module Api
  module V1

		class OrganizationsController < ApplicationController

			def show
			end

			def index
				render json: Organization.all, include: ['listings']
        binding.pry
			end
		end
	end
end
