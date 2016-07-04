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
        <div className="header-background">
          <ProjectHeader project={this.state.project} author={this.state.project.author}/>
        </div>
        <div className="project-content-background">
          <div className="project-body">
            <section className="project-content">
              {this.state.project.content}
            </section>
            <aside className="rewards"></aside>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Project;
