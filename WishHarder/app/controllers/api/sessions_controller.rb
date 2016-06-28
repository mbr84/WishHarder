class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params)

    if @user
      login_user!(@user)
      render :show
    else
      render json: { errors: @user.errors}
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      raise ActionController::RoutingError.new('Not Found')
    end
  end

end
