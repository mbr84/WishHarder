class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login_user!(@user)
      render json: 'users/show'
    else
      render json: {base: ['Invalid Username or Password']}, status: 401
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: {base: ['No User is Signed in']}, status: 404
    end
  end

end
