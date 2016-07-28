const React = require('react')
const Link = require('react-router').Link
const SessionStore = require('../stores/session_store');
const ProjectStore = require('../stores/project_store');
const SearchResults = require('./search_results');
const SessionActions = require('../actions/session_actions');
const hashHistory = require('react-router').hashHistory

const Nav = React.createClass({
  getInitialState(){
    return { dropDownClass: 'hide',
      query: '',
      searchNavClass: 'top search-nav',
      navLinksClass: 'bottom nav-links',
      mainNavClass: 'no-overflow',
      searchClass: 'way-left',
      toggleSearch: 'hide-search-results',
      results: [],
      leftArrow: 'button-off',
      rightArrow: 'button-off',
    }
  },

  componentWillReceiveProps() {
    this.setState({ dropDownClass: 'hide',
                    results: [],
                    leftArrow: 'button-off',
                    rightArrow: 'button-off'
                  });
    if (this.state.searchNavClass.slice(0, 3) !== "top") {
      this._toggleSearch()
    };
  },

  _handleDrop(e){
    e.stopPropagation();
    if (this.state.dropDownClass === 'show') {
      this.setState({ dropDownClass: 'hide', mainNavClass: 'no-overflow' })
    } else {
      this.setState({ dropDownClass: 'show', mainNavClass: 'overflow' })
    }
  },

  _mouseDrop(){
    if (this.state.dropDownClass === 'show') {
      this.setState({ dropDownClass: 'hide', mainNavClass: 'no-overflow '})
    }
  },

  _toggleSearch(){
    if (this.state.searchNavClass.slice(0, 3) === "top") {
      this.setState({ searchNavClass: 'bottom search-nav',
        navLinksClass: 'off nav-links',
        mainNavClass: 'no-overflow',
        searchClass: 'just-right',
      })
      this.searchField.focus();
    } else {
      this.setState({ searchNavClass: 'top search-nav',
        searchClass: 'way-left',
        navLinksClass: 'bottom nav-links',
        results: [],
        query: "",
        leftArrow: "button-off",
        rightArrow: "button-off"
      })
    }
  },

  _handleScroll(direction){
    return () => {
      this.currentScroll += (direction * 960)
      this.inLineScrollStyle = { left: this.currentScroll + "px"};

      if (this.currentScroll <= this.state.maxScroll) {
        this.setState({ rightArrow: 'button-off' });
      } else {
        this.setState({ rightArrow: 'button-on' });
      }

      if (this.currentScroll < 0) {
        this.setState({ leftArrow: 'button-on' });
      } else {
        this.setState({ leftArrow: 'button-off' });
      }
    };
  },

  _handleChange(e){
    let searchResults = ProjectStore.search(e.target.value);

    if (searchResults.length > 0) {
      let extraPanes = Math.ceil(searchResults.length / 4) - 1;
      this.currentScroll = 0;
      this.inLineScrollStyle = { left: '0px' };
      if (extraPanes > 0 ) {
        this.setState({ rightArrow: 'button-on' });
      } else {
        this.setState({ rightArrow: 'button-off' })
      }
      this.setState({ maxScroll: -960 * extraPanes });
    }

    this.setState({ query: e.target.value,
      results: searchResults,
      toggleSearch: 'show-search-results',
      leftArrow: 'button-off'
    });
    if (e.target.value === "") {
      this.setState({ results: [], maxScroll: 0 });
    }
  },

  _handleTitleClick(){
    hashHistory.push('/discover')
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
            <div className={this.state.dropDownClass} onMouseLeave={this._mouseDrop}>
              <div className="my-projects">
                <h3>My Projects</h3>
                <ul>
                  {ProjectStore.userProjects().map((project) => {
                    return <li key={project.id}>
                      <Link to={`/projects/${project.id}`}
                            onClick={this._handleDrop}>{project.title}</Link></li>
                  })}
                </ul>
              </div>
              <div className="user-options">
                <h3>Settings</h3>
                <ul>
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
                           onChange={this._handleChange}
                           ref={(ref) => this.searchField = ref} />

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
                <span >
                  <Link to={'/discover'}
                            className="nav-link">
                          Discover
                  </Link>
                </span>
                <span >
                  <Link to={'/projects/new'}
                        className="nav-link">
                      Wish
                  </Link>
                </span>
                <span >
                  <a href='https://www.linkedin.com/in/matthew-bramfeld-275473b3'
                        className="nav-link">
                      About Us
                  </a>
                </span>
              </div>
            </div>
            <div className="logo">
              <h1 className="header-h1"
                  onClick={this._handleTitleClick}>
                Wish
                <span className="header-span">
                  Harder
                </span>
              </h1>
            </div>
            <div className="user-links">
              {userLinks}
            </div>
          </div>
        </nav>
        <div className="s-results-outer">
          <div className={this.state.leftArrow}
               id="left-arrow"
               onClick={this._handleScroll(1)}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </div>

          <SearchResults results={this.state.results} style={this.inLineScrollStyle} />

          <div className={this.state.rightArrow}
               id="right-arrow"
               onClick={this._handleScroll(-1)}>
            <i className='fa fa-chevron-right' aria-hidden='true'></i>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
