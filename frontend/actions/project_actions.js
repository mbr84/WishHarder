const AppDispatcher = require('../dispatcher/dispatcher');
const ProjecctApiUtil = require('../util/project_api_util');
const ProjectConstants = require('../constants/project_constants');

module.exports = {
  fetchProjects(){
    ProjecctApiUtil.fetchProjects(this.receiveProjects)
  },

  removeProject() {
    ProjectApiUtil.removeProject(id, this.removeDeletedProject)
  },

  receiveProjects(projects){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  removeDeletedProject(project){
    AppDispatcher.dispatch
  }
};
