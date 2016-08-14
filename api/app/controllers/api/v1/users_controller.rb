module Api
  module V1

    class UsersController < ApplicationController
      # skip_before_action :login_required, only: [:new, :create]

      # before_action :ensure_user_is_current, only: :show

      # def new
      #   @user = User.new
      # end

      def create
        binding.pry
        @user = User.new(user_params)
        if @user.save
          # login(@user)
          redirect_to user_path(@user)
        else
          render json: @user.errors.full_messages
        end
      end

      def show
        @user = User.find(params[:id])
        render json: @user
      end

      def show_listings
        @user = User.find(params[:id])
        render json: @user.listings
      end

      def show_conversations
        @user = User.find(params[:id])
        render json: @user.conversations
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

      # def user_params
      #   params.require(:user).permit(:first_name, :last_name, :street_address, :city, :password, :email)
      # end

      # def ensure_user_is_current
      #   redirect_to root_url unless params[:id].to_i == current_user.id
      # end
    end
  end
end
