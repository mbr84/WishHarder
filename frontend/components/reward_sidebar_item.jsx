const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');


const RewardSidebarItem = React.createClass({
  _handleClick(){
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push(`/projects/${this.props.reward.project_id}/rewards/${this.props.reward.reward_id}`)
    } else {
      hashHistory.push(`/login`)
    }
  },

  render() {
    return (
      <div className="reward-sidebar-item" onClick={this._handleClick}>
        <h2 className="pledge-amt">Pledge ${this.props.reward.value} or more</h2>
        <h3 className="reward-item-name">{this.props.reward.name}</h3>
        <div className="reward-item-desc">{this.props.reward.description}</div>
        <div className="reward-item-backers">{this.props.reward.backers} backers</div>
      </div>
    );
  }
});
module.exports = RewardSidebarItem;
