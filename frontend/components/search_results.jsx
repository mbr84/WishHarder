const React = require('react')
const SearchItem = require('./search_item')

const SearchResults = React.createClass({
  getInitialState(){
    return { searchPaneClass: "hide-search-results" }
  },

  componentWillReceiveProps(newProps){
    if (Object.keys(newProps.results).length < 1) {
      this.setState({ searchPaneClass: "hide-search-results" })
    } else {
      this.setState({ searchPaneClass: "show-search-results" })
    }
  },

  render() {
    return (
      <div className="cf">
        <div className={this.state.searchPaneClass}>
          <div className="results-pane">
            <ul className="search-list cf"
                style={this.props.style}>
              {this.props.results.map(project => {
                return <li className="search-list-item cf"
                           key={project.id}>
                           <SearchItem project={project} />
                       </li>;
              })}
            </ul>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchResults;
