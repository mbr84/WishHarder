const React = require('react');
const ProjectStore = require('../stores/project_store');

const Search = React.createClass({
  getInitialState(){
    return { query: "" }
  },

  _handleSubmit() {
    ProjectStore.search(this.state.query)
  },

  _handleChange(e){
    this.setState({ query: e.target.value })
  },

  render(){
    return (
      <div className="search-container">
        <form onSubmit={this._onSubmit}>
          <i className="material-icons">search</i>
          <input type="text"
                 className="search-field"
                 placeholder="Search"
                 value={this.state.query}
                 onChange={this._handleChange} />
        </form>
      </div>
    )
  }
})
