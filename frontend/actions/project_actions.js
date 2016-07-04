const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectApiUtil = require('../util/project_api_util');
const ProjectConstants = require('../constants/project_constants');


module.exports = {
  fetchProjects(){
    ProjectApiUtil.fetchProjects(this.receiveProjects);
  },

  removeProject() {
    ProjectApiUtil.removeProject(id, this.removeDeletedProject)
  },

  createProject(project) {
    ProjectApiUtil.createProject(project, this.receiveProject)
  },

  receiveProject(project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: project
    });
    hashHistory.push('/projects/id/rewards/new')
  },

  receiveProjects(projects){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  }
};
