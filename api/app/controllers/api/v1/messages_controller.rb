module Api
  module V1

		class MessagesController < ApplicationController

			def new
          binding.pry
          username = request.form['username']
          text = cgi.escape(request.form['text']) # let's escape it for security's sake
          time = request.form['time']
          return "great success!"
			end

			def create
			end

			def show
			end

			def index
				render json: Message.all
			end


		end
	end
end
