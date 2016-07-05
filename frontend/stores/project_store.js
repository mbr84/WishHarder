const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectConstants = require('../constants/project_constants');


const ProjectStore = new Store(AppDispatcher);

let _projects = {};

ProjectStore.all = function() {
  return Object.assign({}, _projects);
};

ProjectStore.resetProjects = function(projects) {
  _projects = {};
  projects.forEach(project => {
    _projects[project.id] = project;
  });
};

ProjectStore.addProject = function (project) {
  _projects[project.id] = project;
};

ProjectStore.find = function (id) {
  return _projects[id] || { author: {}, rewards: [] };
};

ProjectStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      this.resetProjects(payload.projects)
      this.__emitChange()
      break;
    case ProjectConstants.PROJECT_RECEIVED:
      this.addProject(payload.project)
      this.__emitChange()
      break;
    case ProjectConstants.PROJECT_REMOVED:
      this.removeProject(id)
      this.__emitChange()
      break;
  }
};

module.exports = ProjectStore;
