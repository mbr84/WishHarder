const React = require('react')
const SearchItem = require('./search_item')

const SearchResults = React.createClass({
  getInitialState(){
    return { SearchPaneClass: "hide-search-results" }
  },

  render() {
    return (
      <div className="cf">
        <div className="result-container">
          <div className="navigate-results">

          </div>
          <div className="results-pane">
            <ul>
              {this.props.results.map(project => {
                return <li><SearchItem project={project} /></li>;
              })}
            </ul>

          </div>
          <div className="navigate-results">

          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchResults;
