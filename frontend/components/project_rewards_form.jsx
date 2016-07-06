const React = require('react')
const ProjectActions = require('../actions/project_actions')

const ProjectRewardsForm = React.createClass({
  getInitialState() {
    return { project_id: this.props.params.id,
             description: '',
             value: '',
             name: ''
           };
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  _handleSubmit(e) {
    e.preventDefault();
    this.setState({ value: parseInt(this.state.value) })
    ProjectActions.createReward(this.state)
  },

  render() {
    return (
      <div>
        <div className="form-title">
          <h2>Yeah, but what's in it for me?</h2>
          <p>Create and offer rewards, so other people will care about your dreams!</p>
        </div>
        <div className='reward-form'>
          <form onSubmit={this._handleSubmit}>
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
                           onChange={this.update("value")}
                           value={this.state.value} />
                   </div>
                 </div>
              </li>
              <li className="project-form-li">
                <input type="submit" value="Create Reward" className="form-submit-button"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ProjectRewardsForm;
