const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectConstants = require('../constants/project_constants');


const ProjectStore = new Store(AppDispatcher);

let _projects = {};

ProjectStore.all = function() {
  return _projects.slice();
};

ProjectStore.resetPrejects = function(projects) {
  _projects = projects;
};

ProjectStore.addProject = function(project) {
  _projects.push(project);
};

ProjectStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      this.resetPrejects(payload.projects)
      break;
    case ProjectConstants.PROJECT_RECEIVED:
      this.addProject(payload.project)
      break;
    case ProjectConstants.PROJECT_REMOVED:
      this.removeProject(id)
      break;
  }
};

module.exports = ProjectStore;
