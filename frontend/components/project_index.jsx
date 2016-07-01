const ProjectStore = require('../stores/project_store');
const React = require('react');
const ProjectIndexItem = require('./project_index_item.jsx');
const ProjectActions = require('../actions/project_actions')

const ProjectIndex = React.createClass({
  getInitialState() {
    ProjectActions.fetchProjects();
    return ({ projects: ProjectStore.all() })
  },

  componentDidMount(){
    ProjectStore.addListener(this._onChange)
  },

  _onChange() {
    this.setState({ projects: ProjectStore.all() })
  },

  render(){
    return (
      <div>
        {
          this.state.projects.map(project => {
            return <ProjectIndexItem project={project} key={project.id} />
          })
        }
      </div>
    );
  }
});

module.exports = ProjectIndex;
