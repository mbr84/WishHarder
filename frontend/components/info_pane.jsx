const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const ProjectApiUtil = require('../util/project_api_util')


const InfoPane = React.createClass({

  render() {

    return (
      <div className="reward-sidebar-item purchase-info-pane">
        <h2 id="purchase-info-part1"
            className="pledge-amt">Pledge ${this.props.reward.cost} or more</h2>
        <h3 id="purchase-info-part2"
            className="reward-item-name">{this.props.reward.name}</h3>
        <div id="purchase-info-part3"
             className="reward-item-desc"><p>{this.props.reward.description}</p></div>
        <div id="purchase-info-part4"
             className="reward-item-backers">{this.props.backers} backers</div>
      </div>
    );
  }
});
module.exports = InfoPane;
