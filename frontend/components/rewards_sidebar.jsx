const React = require('react')
const RewardSidebarItem = require('./reward_sidebar_item')


const RewardSidebar = React.createClass({
  render(){

    return (
      <div>
        <ul>
          {this.props.rewards.map(reward => {
            return <li key={reward.id}><RewardSidebarItem reward={reward} /></li>
          })}
        </ul>
      </div>
    )
  }

})


module.exports = RewardSidebar;
