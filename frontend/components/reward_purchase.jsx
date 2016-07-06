const React = require('react');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');

const RewardPurchase = React.createClass({
  getInitialState(){
    ProjectActions.fetchProject(parseInt(this.props.params.id))
    let project = ProjectStore.find(this.props.params.id)
    return { project: project }
  },

  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this._onChange)
  },

  _onChange(){
    let project = ProjectStore.find(this.props.params.id)
    project.rewards.forEach(reward => {
      if (reward.reward_id === this.props.params.reward_id) {
        this.reward = reward
      }
    })
    this.setState({ project: project, reward: this.reward})
  },

  componentWillUnmount(){
    this.projectListener.remove()
  },

  _handleSubmit(){
    
  },

  render(){
    if (!ProjectStore.empty()) {
      return (
        <div>
          <div className="form-title">
            <h2>support {this.state.project.author.username}s wish</h2>
            <p></p>
          </div>
          <div className="purchase-form">
            <form onSubmit={this._handleSubmit}>
              <input type="button" className="back-button">Back this Project!</input>

            </form>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
});

module.exports = RewardPurchase;
