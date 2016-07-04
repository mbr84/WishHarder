const React = require('react');
const ProjectHeader = require('./project_header');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');

const Project = React.createClass({
  getInitialState(){
    ProjectActions.fetchProjects();
    return ({ project: ProjectStore.find(this.props.params.id) })
  },

  componentDidMount(){
    ProjectStore.addListener(this._onChange)
  },

  _onChange() {
    this.setState({ project: ProjectStore.find(this.props.params.id) })
  },

  render(){
    return (
      <div>
        <ProjectHeader project={this.state.project} />
        <div className="project-body">
          <section className="project-content">
            {this.state.project.content}
          </section>
          <aside className="rewards"></aside>
        </div>
      </div>
    );
  }
});

module.exports = Project;
