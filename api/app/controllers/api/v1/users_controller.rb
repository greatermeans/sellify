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
        binding.pry
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

      def join_org
        @user = User.find(params[:id])
        params[:relatedGroups].map do |organization|
          @user.organizations << Organization.find(organization[:id])
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
        @users = User.all
        render json: @users, include: ['listings','communities','conversations','organizations']
      end

      private


      def user_params
        params.require(:user).permit(:first_name, :last_name, :zipcode, :password, :email)
      end

      # def ensure_user_is_current
      #   redirect_to root_url unless params[:id].to_i == current_user.id
      # end
    end
  end
end
