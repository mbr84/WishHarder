const React = require('react')
const ProjectActions = require('../actions/project_actions')
const hashHistory = require ('react-router').hashHistory

const ProjectRewardsForm = React.createClass({
  getInitialState() {
    return { project_id: this.props.params.id,
             description: '',
             cost: '',
             name: ''
           };
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  _returnToProject(e) {
    hashHistory.push(`/projects/${this.props.params.id}`)
  },

  _handleSubmit(e) {
    e.preventDefault();
    this.setState({ cost: parseInt(this.state.value) })
    ProjectActions.createReward(this.state);
    this.setState({ project_id: this.props.params.id,
                    description: '',
                    value: '',
                    name: ''
    });
  },

  render() {
    return (
      <div>
        <div className="form-title">
          <h2>Yeah, but what's in it for me?</h2>
          <p>Create and offer rewards, so other people will care about your dreams!</p>
        </div>
        <div className='reward-form-container'>
          <form className="reward-form" onSubmit={this._handleSubmit}>
            <ul>
              <li className="reward-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Reward title</label></div>
                  <div className="form-wrapper">
                    <input type="text"
                           onChange={this.update("name")}
                           value={this.state.name} />
                   </div>
                 </div>
              </li>
              <li className="reward-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Reward Description</label></div>
                  <div className="form-wrapper">
                    <textarea
                           className="description-input"
                           rows="4"
                           cols="60"
                           onChange={this.update("description")}
                           value={this.state.description}></textarea>
                   </div>
                 </div>
              </li>
              <li className="reward-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Value</label></div>
                  <div className="form-wrapper">
                    $<input type="text"
                           placeholder="0"
                           onChange={this.update("cost")}
                           value={this.state.cost} />
                   </div>
                 </div>
              </li>
              <li className="project-form-li">
                <div className="button-holder">
                  <input type="submit"
                         value="Add Reward"
                         className="form-submit-button"/>
                  <button className='reward-complete'
                          onClick={this._returnToProject}>
                          Done
                  </button>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ProjectRewardsForm;
