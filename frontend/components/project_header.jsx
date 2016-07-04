const React = require('react');

const ProjectHeader = React.createClass({
  render(){
    return (
      <div className="header">
        <title>

        </title>
        <section className="header-content">
          <figure>
            <div className="project-image-container">
              <img className="header-image" src={this.props.project.primary_img} />
            </div>
          </figure>
          <div>
            <div className="where">
              {this.props.project.city}, {this.props.project.state}
            </div>
            <div className="blurb">
              {this.props.project.blurb}
            </div>
            <div className="share-bar">

              <div className="share-bar-title">
                <div className="share-option">
                  Tweet
                </div>
                <div className="share-option">
                  Share
                </div>
                <div className="share-option">
                  Post
                </div>
                <div className="share-option">
                  Pin
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="header-sidebar">
          <div className="header-stats">
            <div className="header-backers">
              <div className="stat">


              </div>
              <span className="stat-type">

              </span>
            </div>
            <div className="header-pledged">
              <div className="stat">
                ${this.props.project.pledged}
              </div>
              <span className="stat-type">
                pledged of ${this.props.project.goal} goal
              </span>
            </div>
            <div className="header-time-left">
              <div className="stat">

              </div>
              <span className="stat-type">
              </span>
            </div>
          </div>
          <div className="back-button-container"></div>
          <div className="author-info"></div>

        </aside>
      </div>
    )
  }
})

module.exports = ProjectHeader;
