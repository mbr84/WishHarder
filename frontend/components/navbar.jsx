const React = require('react')
const Link = require('react-router').Link
const SessionStore = require('../stores/session_store');
const SearchResults = require('./search_results');
const SessionActions = require('../actions/session_actions');

const Nav = React.createClass({
  getInitialState(){
    return { dropDownClass: 'hide',
      query: '',
      searchNavClass: 'top search-nav',
      navLinksClass: 'bottom nav-links',
      mainNavClass: 'no-overflow',
      searchClass: 'way-left',
      toggleSearch: 'hide-search-results',
      results: []
    }
  },

  componentWillReceiveProps() {
    this.setState({ dropDownClass: 'hide', results: [] });
    if (this.state.searchNavClass.slice(0, 3) !== "top") {
      this._toggleSearch()
    };
  },

  _handleDrop(){
    if (this.state.dropDownClass === 'show') {
      this.setState({ dropDownClass: 'hide', mainNavClass: 'no-overflow' })
    } else {
      this.setState({ dropDownClass: 'show', mainNavClass: 'overflow' })
    }
  },

  _toggleSearch(){
    if (this.state.searchNavClass.slice(0, 3) === "top") {
      this.setState({ searchNavClass: 'bottom search-nav',
        navLinksClass: 'off nav-links',
        mainNavClass: 'no-overflow',
        searchClass: 'just-right',
      })
    } else {
      this.setState({ searchNavClass: 'top search-nav',
        searchClass: 'way-left',
        navLinksClass: 'bottom nav-links',
        results: [],
        query: ""
      })
    }
  },

  _handleSubmit(){

  },

  _handleChange(e){

    const searchResults = ProjectStore.search(e.target.value);

    this.setState({ query: e.target.value,
      results: searchResults,
      toggleSearch: 'show-search-results'
    });
    if (e.target.value === "") {
      this.setState({ results: [] })
    }
  },

  _handleLogout() {
    SessionActions.logout()
  },

  render(){
    const userLinks = (SessionStore.isUserLoggedIn()) ? (
      <div className="nav-right">
        <div className="nav-filler-a"></div>
        <span onClick={this._toggleSearch}>
          <i id="mag" className="clickable material-icons">search</i>
        </span>
        <div className="drop-down-button">
          <i onClick={this._handleDrop} id="dd" className="clickable material-icons">arrow_drop_down</i>
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
        <div className="nav-filler-b"></div>
        <span id="mag" onClick={this._toggleSearch}><i className="material-icons">search</i></span>
        <span><Link to={'/login'} className="nav-link">Log In</Link></span>
        <span><Link to={'/signup'} className="nav-link">Sign Up</Link></span>
      </div>
    );

    return (
      <div>
        <nav className={this.state.mainNavClass}>
          <div className={this.state.searchNavClass}>
            <div className="nav-left">
              <div className="search-container">
                <div className={this.state.searchClass}>
                  <form className="search-form" onSubmit={this._onSubmit}>
                    <i id="fred" className="material-icons">search</i>
                    <input type="text"
                           className="search-field"
                           placeholder="Search"
                           value={this.state.query}
                           onChange={this._handleChange} />

                  </form>
                </div>
              </div>
            </div>
            <div className="nav-right" onClick={this._toggleSearch}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
          <div className={this.state.navLinksClass}>
            <div className="site-links">
              <div className="nav-left">
                <span>
                  <Link to={'/discover'}
                            className="nav-link">
                          Discover
                  </Link>
                </span>
                <span>
                  <Link to={'/projects/new'}
                        className="nav-link">
                      Wish
                  </Link>
                </span>
                <span>
                  <Link to={'/about'}
                        className="nav-link">
                      About Us
                  </Link>
                </span>
              </div>
            </div>
            <div className="logo">
              <h1>WishHarder</h1>
            </div>
            <div className="user-links">
              {userLinks}
            </div>
          </div>
        </nav>
        <SearchResults results={this.state.results} />
      </div>
    )
  }
})

module.exports = Nav;
