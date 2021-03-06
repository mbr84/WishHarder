const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectConstants = require('../constants/project_constants');


const ProjectStore = new Store(AppDispatcher);

let _projects = {};


ProjectStore.all = function () {
  return Object.assign({}, _projects);
};

ProjectStore.resetProjects = function (projects) {
  _projects = {};
  for (let i = 0; i < projects.length; i++) {
    _projects[projects[i].id] = projects[i];
  }
};

ProjectStore.empty = function () {
  return Object.keys(_projects).length < 1;
};

ProjectStore.addProject = function (project) {
  _projects[project.id] = project;
};

ProjectStore.find = function (id) {
  return _projects[id] || { author: {}, rewards: [] };
};

ProjectStore.userProjects = function (username) {
  const projects = [];
  Object.keys(_projects).forEach((key) => {
    if (_projects[key].author.username === username) {
      projects.push(_projects[key]);
    }
  });
  return projects;
};

ProjectStore.search = function (searchQuery) {
  const searchResults = [];
  const queries = searchQuery.split(' ').map(query => query.toLowerCase());
  Object.keys(_projects).forEach(project => {
    for (let i = 0; i < queries.length; i++) {
      if (searchResults.length === 16) {
        return searchResults;
      }
      if ((_projects[project].blurb.toLowerCase().indexOf(queries[i]) !== -1 ||
        _projects[project].author.username.toLowerCase().indexOf(queries[i]) !== -1 ||
        _projects[project].title.toLowerCase().indexOf(queries[i]) !== -1) &&
        !_projects[project].complete && queries[i] !== '') {
        searchResults.push(_projects[project]);
        break;
      }
    }
  });
  return searchResults;
};

ProjectStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      this.resetProjects(payload.projects);
      this.__emitChange();
      break;
    case ProjectConstants.PROJECT_RECEIVED:
      this.addProject(payload.project);
      this.__emitChange();
      break;
    case ProjectConstants.PROJECT_REMOVED:
      this.removeProject(id);
      this.__emitChange();
      break;
  }
};

module.exports = ProjectStore;
