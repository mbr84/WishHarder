class Api::RewardsController < ApplicationController

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      @project = Project.find(@reward.project_id)
      render "api/projects/show"
    else
      render json: { errors: @reward.errors}
    end
  end

  def index
    @rewards = Reward.where(project_id: params[:project_id])
  end

  private

  def reward_params
    params.require(:reward).permit(:project_id, :name, :value, :description)
  end
end
