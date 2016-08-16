class SessionsController < ApplicationController
  # skip_before_action :login_required, only: [:new, :create]

  # def new
  #   if logged_in?
  #     session[:user_id] = nil
  #     flash.now[:message] = 'You have been logged out'
  #   end
  # end


  def create
    error = {error: 'The account/password combination is invalid. Please try again'}
    @user = User.find_by(email: user_params[:email])
    if !!@user && @user.authenticate(user_params[:password])
      session[:user_id] = @user.id
      render json: @user, include: ['listings','organizations']
    else
      render json: error
    end
  end


  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  private

    def user_params
      params.require(:user).permit(:password, :email)
    end

end
