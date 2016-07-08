const React = require('react');
const hashHistory = require('react-router').hashHistory;


// onClick={  hashHistory.push(`/projects/${project.id}`)}
const ProjectIndexItem = React.createClass({
  navigateProject() {
    hashHistory.push(`/projects/${this.props.project.id}`)
  },

  render(){
    const percentComplete = Math.floor((this.props.project.pledged/this.props.project.goal)*100)
    const greenBar = { width: percentComplete + "%" }
    const greyBar = { width: (100 - percentComplete) + "%" }

    return(
      <div className="index-item-container">
        <div className="img-container"
             onClick={this.navigateProject}>
          <img className="index-item-img" src={this.props.project.primary_img}></img>
        </div>
        <div className="description-element">
          <div className="index-item-title" >{this.props.project.title}</div>
          <div className="index-author" >{this.props.project.author.username}</div>
          <div className="index-blurb" >{this.props.project.blurb}</div>
        </div>
        <div className="stats">
          <div className="location">{this.props.project.city}, {this.props.project.state}</div>
          <div className="index-duration">{this.props.project.duration}</div>
          <div className="completion-percent">
            <div className="percent-complete"
                 style={greenBar}></div>
            <div className="percent-left"
                 style={greyBar}></div>
          </div>
          <div className="index-pledged">
            <ul id="stats-list">
              <li><div className="ind-stats">{percentComplete}%</div>
                <div className="stat-item">funded</div></li>
              <li><div className="ind-stats">${this.props.project.pledged}</div>
                <div className="stat-item">pledged</div></li>
              <li></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
});


module.exports = ProjectIndexItem;
