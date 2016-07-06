class Api::RewardingsController < ApplicationController

  def create
    @rewarding = Rewarding.new(rewarding_params)
    @rewarding.backer_id = current_user.id
    if @rewarding.save
      @project = @rewarding.reward.project
      @project.pledged += @rewarding.reward.value
      @project.save
      render "api/projects/show"
    else
      render json: { errors: @rewarding.errors }
    end
  end

  private

  def rewarding_params
    params.require(:rewarding).permit(:reward_id)
  end
end
