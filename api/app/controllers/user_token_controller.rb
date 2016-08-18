class UserTokenController < Knock::AuthTokenController

	def create
	  @user = User.find_by(email: auth_params[:email])
	  render json: {auth: auth_token, user: @user}, include: ['listings','organizations']
    end

end
