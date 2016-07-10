const React = require('react');
const hashHistory = require('react-router').hashHistory

const ProjectHeader = React.createClass({
  _onSubmit() {
    hashHistory.push(`/projects/${this.props.project.id}/rewards`)
  },

  render(){
    const projectStatus = (this.props.project.daysLeft < 0) ? (
      <div className="header-time-left">
        <div className="stat project-is-complete">
          Project Funding Concluded
        </div>
      </div>
      ) : (
        <div className="header-time-left">
          <div className="stat">
            {this.props.project.daysLeft}
          </div>
          <span className="stat-type">
            days to go
          </span>
        </div>
      );
      
    return (
      <div>
        <div className="title">
          {this.props.project.title}
          <div className="author">by {this.props.author.username}</div>
        </div>
        <div className="header">
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
                  {this.props.project.backers}
                </div>
                <span className="stat-type">
                  backers
                </span>
              </div>
              <div className="header-pledged">
                <div className="stat">
                  $ {this.props.project.pledged}
                </div>
                <span className="stat-type">
                  pledged of ${this.props.project.goal} goal
                </span>
              </div>
              {projectStatus}
            </div>
            <div className="back-button-container">
              <form onSubmit={this._onSubmit}>
                <input className="header-backing-button" type="submit" value="Back this Wish" />
              </form>
            </div>
            <div className="author-info"></div>

          </aside>
        </div>
      </div>
    )
  }
})

module.exports = ProjectHeader;
