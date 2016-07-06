class Api::RewardingsController < ApplicationController

  def create
    @rewarding = Reward.new(reward_params)
    if @rewarding.save
      @project = @rewarding.reward.project
      render "api/projects/show"
    else
      render json: { errors: @rewarding.errors }
    end
  end
end
