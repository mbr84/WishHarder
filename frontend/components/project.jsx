const React = require('react');
const ProjectHeader = require('./project_header');
const RewardSidebar = require('./rewards_sidebar');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');

const Project = React.createClass({
  getInitialState(){
    ProjectActions.fetchProjects();
    return ({ project: ProjectStore.find(this.props.params.id) })
  },

  componentWillReceiveProps(newProps) {
    this.setState({ project: ProjectStore.find(newProps.params.id) });
  },

  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this._onChange)
    this.props.toggleFooter()
  },

  componentWillUnmount() {
    this.projectListener.remove();
  },

  _onChange() {
    this.setState({ project: ProjectStore.find(this.props.params.id) })
  },

  render(){
    return (
      <div className="total-background">
        <div className="header-background">
          <ProjectHeader project={this.state.project} author={this.state.project.author}/>
        </div>
        <div className="project-content-background cf">
          <div className="project-body cf">
            <section className="project-content">
              {this.state.project.content}
            </section>
            <aside className="reward-sidebar">
              <RewardSidebar rewards={this.state.project.rewards} />
            </aside>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Project;
