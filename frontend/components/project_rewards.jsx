const React = require('react');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const RewardSidebarItem = require('./reward_sidebar_item');
const ProjectApiUtil = require('../util/project_api_util');


const ProjectRewards = React.createClass({
  getInitialState(){
    ProjectActions.fetchProject(parseInt(this.props.params.id))
    return {project: { rewards: [] }}
  },

  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this._onChange);
  },

  componentWillUpdate() {
    this.props.toggleFooter();
  },

  _onChange(){
    this.setState({ project: ProjectStore.find(this.props.params.id) })
  },

  componentWillUnmount(){
    this.projectListener.remove();
  },


  render() {
    if (!ProjectStore.empty()) {
      const rewards = this.state.project.rewards.map(reward => {
        return <li key={reward.reward_id}>
            <RewardSidebarItem reward={reward} />
          </li>;
      });
      return (
        <div>
          <div className="header-background">
            <div className="form-title reward-page"><h2>choose your reward</h2></div>
            <div className='reward-form'>
              <ul>
                {rewards}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
})
module.exports = ProjectRewards
