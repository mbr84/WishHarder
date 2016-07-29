const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const ProjectApiUtil = require('../util/project_api_util')


const RewardSidebarItem = React.createClass({
  getInitialState(){
    return {};
  },

  _handleClick(){
    if (SessionStore.isUserLoggedIn()) {
      ProjectApiUtil.createCheckout(
        this.props.reward.reward_id,
        parseInt(this.props.reward.cost),
        function(checkout){
          hashHistory.push(`/checkouts/${checkout.id}`)
        }),
        function(){
          this.setState( { error: true })
        }.bind(this)
    } else {
      hashHistory.push(`/login`)
    }
  },

  render() {
    let errorMessage;
    if (this.state.error) {
      const errorStyle = { color: "red" };
      errorMessage = <div className="reward-item-backers"
        style={errorStyle}>Submission Error</div>
    }
    return (
      <div className="reward-sidebar-item" onClick={this._handleClick}>
        <h2 className="pledge-amt">Pledge ${this.props.reward.cost} or more</h2>
        <h3 className="reward-item-name">{this.props.reward.name}</h3>
        <div className="reward-item-desc">{this.props.reward.description}</div>
        <div className="reward-item-backers">{this.props.reward.backers} backers</div>
        {errorMessage}
        <div className="reward-hover">
          <div className="reward-select">Select Reward</div>
        </div>
      </div>
    );
  }
});
module.exports = RewardSidebarItem;
