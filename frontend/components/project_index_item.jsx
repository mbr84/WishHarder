const React = require('react');


const ProjectIndexItem = React.createClass({


  render(){
    const percentComplete = Math.floor((this.props.project.pledged/this.props.project.goal)*100)
    const greenBar = {width: percentComplete + "%"}
    const greyBar = {width: (100 - percentComplete) + "%"}

    return(
      <div className="index-item-container">
        <div className="img-container">
          <img className="index-item-img" src={this.props.project.primary_img}></img>
        </div>
        <div className="description-element">
          <div className="index-item-title" >{this.props.project.title}</div>
          <div className="index-author" >{this.props.project.author.username}</div>
          <div className="index-blurb" >{this.props.project.blurb}</div>
        </div>
        <div className="stats">
          <div className="index-duration">{this.props.project.duration}</div>
          <div className="index-pledged">{this.props.project.pledged}</div>
          <div className="completion-percent">
            <div className="percent-complete"
                 style={greenBar}></div>
            <div className="percent-left"
                 style={greyBar}></div>
          </div>
        </div>

      </div>
    );
  }
});


module.exports = ProjectIndexItem;
