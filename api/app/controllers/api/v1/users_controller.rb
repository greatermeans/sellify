module Api
  module V1

    class UsersController < ApplicationController

      def create
        @user = User.new(user_params)
        if @user.save
          command = AuthenticateUser.call(user_params[:email], user_params[:password])
          render json: { auth_token: command.result, user: @user }, include: ['listings','communities','conversations','organizations']
        else
          render json: @user.errors
        end
      end

      def show
        @user = User.find(params[:id])
        render json: @user, include: ['listings','organizations']
      end

      def show_listings
        @user = User.find(params[:id])
        render json: @user.listings
      end

      def show_conversations
        @user = User.find(params[:id])
        render json: @user.conversations
      end

      def signin
        @user = User.find(params[:id])
      end

      def join_org
        @user = User.find(params[:id].to_i)
        @user.organizations = []
        params[:orgIds].map do |orgId|
          if !@user.organizations.include?(Organization.find(orgId))
            @user.organizations << Organization.find(orgId)
          end
        end
        @user.save
        render json: @user, include: ['listings','organizations']
      end



      # def edit
      #   @user = User.find(params[:id])
      # end

      # def destroy
      # end

      def index
        render json: @current_user, include: ['listings','communities','conversations','organizations']
      end

      def validate
        if !User.find_by(email: user_params[:email])
          render json: 'success', status: 200
        else
          render json: { error: 'User already exists' }, status: 401
        end
      end

      private


      def user_params
        params.require(:user).permit(:first_name, :last_name, :zipcode, :password, :email)
      end
    end
  end
end
