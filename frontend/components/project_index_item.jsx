const React = require('react');

const ProjectIndexItem = React.createClass({
  render(){
    return(
      <div>
        <div><img src={this.props.project.primary_img}></img></div>
        <div>{this.props.project.title}</div>
        <div>{this.props.project.blurb}</div>
        <div>{this.props.project.author.username}</div>
        <div>{this.props.project.duration}</div>
        <div>{this.props.project.pledged}</div>

      </div>
    );
  }
});


module.exports = ProjectIndexItem;
