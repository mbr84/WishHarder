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
                    <a href="http://www.twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" /></svg></a>
                    <a href="http://www.twitter.com/"><span className="share-text">Tweet</span></a>
                  </div>
                  <div className="share-option">
                    <a href="http://www.facebook.com/share"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg></a>
                    <a href="http://www.facebook.com/share"><span className="share-text">Share</span></a>
                  </div>
                  <div className="share-option">
                    <a href="http://www.tumblr.com/"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-1.105 18.739c-.524.691-2.29 1.261-3.889 1.261-3.979 0-6.006-1.466-6.006-4.573v-4.104h-1.933l-.067-.067v-3.16l.045-.064.178-.059c1.597-.534 2.624-1.432 2.851-3.284.055-.447.431-.689.757-.689h4.767l.066.067v3.211l.066.067h2.535l.068.067v3.844l-.068.067h-2.545l-.067.067v3.81c.002.103.006.414.109.414h2.182l.064.046.992 2.941-.105.138zm-1.309-2.278l.664 1.967-.016.07c-.5.48-1.703.837-2.686.854l-.111.001c-3.232 0-3.788-2.468-3.788-3.926v-4.692l-.066-.067h-1.854l-.067-.067-.016-2.041.042-.062c1.67-.65 2.604-1.73 2.849-3.729.014-.111.105-.114.106-.114h2.298l.067.067v3.211l.068.067h2.535l.066.067v2.534l-.066.067h-2.547l-.064.067v4.47c.016.959.477 1.445 1.377 1.445.362 0 .744-.084 1.123-.229l.086.04z" /></svg></a>
                    <a href="http://www.tumblr.com/"><span className="share-text">Post</span></a>
                  </div>
                  <div className="share-option">
                    <a href="http://www.pinterest.com"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-7 20c-.825 0-1.62-.125-2.369-.357.326-.531.813-1.402.994-2.098l.499-1.901c.261.498 1.023.918 1.833.918 2.414 0 4.152-2.219 4.152-4.976 0-2.643-2.157-4.62-4.933-4.62-3.452 0-5.286 2.317-5.286 4.841 0 1.174.625 2.634 1.624 3.1.151.07.232.039.268-.107l.222-.907c.019-.081.01-.15-.056-.23-.331-.4-.595-1.138-.595-1.825 0-1.765 1.336-3.472 3.612-3.472 1.965 0 3.341 1.339 3.341 3.255 0 2.164-1.093 3.663-2.515 3.663-.786 0-1.374-.649-1.185-1.446.226-.951.663-1.977.663-2.664 0-.614-.33-1.127-1.012-1.127-.803 0-1.448.831-1.448 1.943 0 .709.239 1.188.239 1.188s-.793 3.353-.938 3.977c-.161.691-.098 1.662-.028 2.294-2.974-1.165-5.082-4.06-5.082-7.449 0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" /></svg></a>
                    <a href="http://www.pinterest.com"><span className="share-text">Pin</span></a>
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
