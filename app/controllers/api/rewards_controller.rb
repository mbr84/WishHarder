class Api::RewardsController < ApplicationController

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      @project = @reward.project
      render "api/projects/show"
    else
      render json: { errors: @reward.errors }
    end
  end

  def index
    @rewards = Reward.where(project_id: params[:project_id])
  end

  def show
    @reward = Reward.find(params.permit(:id)[:id])
    @project = @reward.project
  end

  private

  def reward_params
    params.require(:reward).permit(:project_id, :name, :cost, :description)
  end
end
