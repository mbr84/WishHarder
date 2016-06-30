class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login_user!(@user)
      render 'api/users/show'
    else
      render json: {errors: ['Invalid Username or Password']}, status: 401
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: {errors: ['No User is Signed in']}, status: 404
    end
  end

end
