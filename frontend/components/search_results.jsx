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
    console.log(this.props.results)
    return (
      <div className="cf">
        <div className={this.state.searchPaneClass}>
          <div className="navigate-results">

          </div>
          <div className="results-pane">
            <ul>
              {this.props.results.map(project => {
                return <li key={project.id}><SearchItem project={project} /></li>;
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
