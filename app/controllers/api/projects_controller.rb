class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: { errors: @project.errors}
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      render :show
    else
      render json: { errors: @project.errors}
      render :edit
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def destroy
    Project.destroy(params[:id])
    render :index
  end

  def show
    @project = Project.find(params[:id])
  end


  private
   def project_params
     params.require(:project).permit(
      :title,
      :content, 
      :author_id,
      :category_id,
      :complete,
      :duration,
      :goal,
      :pledged,
      :featured)
   end
end
