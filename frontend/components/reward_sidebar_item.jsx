const React = require('react')


const RewardSidebarItem = React.createClass({
  render() {
    return (
      <div className="reward-sidebar-item">
        <h2 className="pledge-amt">Pledge ${this.props.reward.value} or more</h2>
        <h3 className="reward-item-name">{this.props.reward.name}</h3>
        <div className="reward-item-desc">{this.props.reward.description}</div>
        <div className="reward-item-backers">{this.props.reward.backers} backers</div>
      </div>
    );
  }
});
module.exports = RewardSidebarItem;
