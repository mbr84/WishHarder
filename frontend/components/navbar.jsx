const React = require('react')
const Link = require('react-router').Link
const SessionStore = require('../stores/session_store')

const Nav = React.createClass({

  _toggleSearch(){

  },

  render(){
    const userLinks = (SessionStore.isUserLoggedIn()) ? (
      <div className="nav-right">
        <span onClick={this._toggleSearch}><i className="material-icons">search</i></span>
        <div>{DropDown}</div>
      </div>
    ) :
      (<div className="nav-right">
        <span onClick={this._toggleSearch}><i className="material-icons">search</i></span>
        <span><Link to={'/login'}>Log In</Link></span>
        <span><Link to={'/signup'}>Sign Up</Link></span>
      </div>
    );

    return (
      <nav className="full-nav">
        <div className="site-links">
          <div className="nav-left">
            <span><Link to={'/projects'}>Discover</Link></span>
            <span><Link to={'/projects/new'}>Wish</Link></span>
            <span><Link to={'/about'}>About Us</Link></span>
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
