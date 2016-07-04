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
    ProjectStore.addListener(this._projectChange)
  },

  _projectChange() {
    this.setState({ projects: ProjectStore.all() })
  },

  render(){
    return (
      <section className="index-body">
        {
          Object.keys(this.state.projects).map(key => {
            return <ProjectIndexItem project={this.state.projects[key]} key={key} />
          })
        }
      </section>
    );
  }
});

module.exports = ProjectIndex;
