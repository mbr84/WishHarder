const React = require('react')
const RewardSidebarItem = require('./reward_sidebar_item')


const RewardSidebar = React.createClass({
  render(){
    debugger
    return (
      <div>
        <ul>
          {this.props.rewards.sort((x, y) => {
            return x.cost - y.cost
          }).map(reward => {
            return <li key={reward.reward_id}><RewardSidebarItem reward={reward} /></li>
          })}
        </ul>
      </div>
    )
  }

})


module.exports = RewardSidebar;
