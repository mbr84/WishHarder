const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectApiUtil = require('../util/project_api_util');
const ProjectConstants = require('../constants/project_constants');
const hashHistory = require('react-router').hashHistory


module.exports = {
  fetchProjects(){
    ProjectApiUtil.fetchProjects(this.receiveProjects);
  },

  fetchProject(id){
    ProjectApiUtil.fetchProject(id, this.receiveProject);
  },

  removeProject() {
    ProjectApiUtil.removeProject(id, this.removeDeletedProject)
  },

  createProject(project) {
    ProjectApiUtil.createProject(project, this.receiveCreatedProject)
  },

  createReward(reward) {
    ProjectApiUtil.createReward(reward, this.receiveProject);
    hashHistory.push(`/projects/${reward.project_id}/rewards/new`);
  },

  createRewarding(rewarding) {
    ProjectApiUtil.createRewarding(rewarding, this.receiveProject)
  },

  receiveProject(project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: project
    });
  },

  receiveCreatedProject(project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: project
    });
    hashHistory.push(`/projects/${project.id}/rewards/new`);
  },

  receiveProjects(projects){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  }
};
