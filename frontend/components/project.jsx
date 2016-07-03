const React = require('react');
const ProjectHeader = require('./project_header');

const Project = React.createClass({
  render(){
    return (
      <div>
        <ProjectHeader project={this.props.project} />
        <section>

        </section>
      </div>
    )
  }
})

module.exports = Project;
