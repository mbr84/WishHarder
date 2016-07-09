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

ProjectStore.empty = function(){
  return Object.keys(_projects).length < 1
};

ProjectStore.addProject = function (project) {
  _projects[project.id] = project;
};

ProjectStore.find = function (id) {
  return _projects[id] || { author: {}, rewards: [] };
};


ProjectStore.search = function(searchQuery) {
  const searchResults = [];
  const queries = searchQuery.split(" ").map(query => query.toLowerCase())

  Object.keys(_projects).forEach(project => {
    queries.forEach(query => {
      if ((_projects[project].blurb.indexOf(query) !== -1 ||
        _projects[project].title.indexOf(query) !== -1) &&
        !_projects[project].complete) {
          searchResults.push(_projects[project]);
      }
    });
  });
  return searchResults;
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
