const React = require('react')
const Link = require('react-router').Link
const SessionStore = require('../stores/session_store')

const Nav = React.createClass({
  getInitialState(){
    return { dropDownClass: "hide" }
  },

  componentWillReceiveProps() {
    this.setState({ dropDownClass: "hide"} )
  },

  _handleDrop(){
    if (this.state.dropDownClass === "show") {
      this.setState({ dropDownClass: "hide" })
    } else {
      this.setState({ dropDownClass: "show" })
    }
  },

  _toggleSearch(){

  },

  _handleLogout() {
    SessionActions.logout()
  },

  render(){
    const userLinks = (SessionStore.isUserLoggedIn()) ? (
      <div className="nav-right">
        <span onClick={this._toggleSearch}><i className="material-icons">search</i></span>
        <div className="drop-down-button">
          <i onClick={this._handleDrop} id="dd" className="material-icons">arrow_drop_down</i>
            <div className={this.state.dropDownClass} onMouseLeave={this._handleDrop}>
              <div className="my-projects">
                <h3>My Projects</h3>

              </div>
              <div className="user-options">
                <h3>Settings</h3>
                <ul>
                  <li className="drop-li"><Link to={`/users/${SessionStore.currentUser().id}`}>Edit Profile</Link></li>
                  <li className="logout drop-li" onClick={this._handleLogout}>Logout</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    ) :
      (<div className="nav-right">
        <span onClick={this._toggleSearch}><i className="material-icons">search</i></span>
        <span><Link to={'/login'} className="nav-link">Log In</Link></span>
        <span><Link to={'/signup'} className="nav-link">Sign Up</Link></span>
      </div>
    );

    return (
      <nav className="full-nav">
        <div className="site-links">
          <div className="nav-left">
            <span><Link to={'/discover'} className="nav-link">Discover</Link></span>
            <span><Link to={'/projects/new'} className="nav-link">Wish</Link></span>
            <span><Link to={'/about'} className="nav-link">About Us</Link></span>
          </div>
        </div>
        <div className="logo">
          <h1>WishHarder</h1>
        </div>
        <div className="user-links">
          {userLinks}
        </div>
      </nav>
    )
  }
})

module.exports = Nav;
