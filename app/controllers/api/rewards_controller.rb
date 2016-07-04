class Api::RewardsController < ApplicationController

  def create
    @reward = Reward.new(reward_params)
    if @project.save
      render "projects/#{reward_params[:project_id]}/show"
    else
      render json: { errors: @project.errors}
    end
  end

  def index
    @rewards = Reward.where(project_id: project_params[:project_id])
  end

  private

  def reward_params
    params.require(:reward).permit(:project_id, :name, :value, :description)
  end
end
