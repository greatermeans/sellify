module Api
  module V1

    class UsersController < ApplicationController
      # skip_before_action :login_required, only: [:new, :create]

      # before_action :ensure_user_is_current, only: :show

      # def new
      #   @user = User.new
      # end

      def create
        @user = User.new(user_params)
        if @user.save
          render json: @user, include: ['listings','organizations']
        else
          render json: @user.errors.full_messages
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
        @user = User.find(params[:id])
        @user.organizations.destroy_all
        params[:orgIds].map do |orgId|
          @user.organizations << Organization.find(orgId)
        end
        @user.save
        render json: @user, include: ['listings','organizations']
      end

      # def update

      # end

      # def edit
      #   @user = User.find(params[:id])
      # end

      # def destroy
      # end

      def index
        render json: @current_user, include: ['listings','communities','conversations','organizations']
      end

      private


      def user_params
        params.require(:user).permit(:first_name, :last_name, :zipcode, :password, :email)
      end
    end
  end
end
