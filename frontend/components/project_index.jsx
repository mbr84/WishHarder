const ProjectStore = require('../stores/project_store');
const React = require('react');
const ProjectIndexItem = require('./project_index_item.jsx');
const ProjectActions = require('../actions/project_actions')
const carouselInstance = require('./slide_show')

const ProjectIndex = React.createClass({
  getInitialState() {
    ProjectActions.fetchProjects();
    return ({ projects: {} })
  },

  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this._projectChange);
  },

  _projectChange() {
    this.setState({ projects: ProjectStore.all() })
    this.props.toggleFooter();
  },

  componentWillUnmount() {
    this.projectListener.remove()
  },

  render(){
    return (
      <div>
        {carouselInstance}
        <section className="index-body">
          {
            Object.keys(this.state.projects).map(key => {
              return <ProjectIndexItem project={this.state.projects[key]} key={key} />
            })
          }
        </section>
      </div>
    );
  }
});

module.exports = ProjectIndex;
