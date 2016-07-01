const ProjectStore = require('../stores/project_store');
const React = require('react');
const ProjectIndexItem = require('./project_index_item');

const ProjectIndex = React.createClass({
  getInitialState() {
    return ({ projects: ProjectStore.all() })
  },

  render(){
    return (
      Object.keys(projects).map(key => {
        return <ProjectIndexItem props={projects[key]} />
      })
    );
  }
});

module.exports = ProjectIndex;
