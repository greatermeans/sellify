module Api
  module V1

		class OrganizationsController < ApplicationController

			def new
			end

			def create
			end

			def show
			end

			def index
				render json: Organization.all
			end
		end
	end
end
