const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const ProjectApiUtil = require('../util/project_api_util')


const InfoPane = React.createClass({

  render() {

    return (
      <div className="reward-sidebar-item purchase-info-pane">
        <h2 className="pledge-amt">Pledge ${this.props.reward.cost} or more</h2>
        <h3 className="reward-item-name">{this.props.reward.name}</h3>
        <div className="reward-item-desc"><p>{this.props.reward.description}</p></div>
        <div className="reward-item-backers">{this.props.reward.backers} backers</div>
      </div>
    );
  }
});
module.exports = InfoPane;
