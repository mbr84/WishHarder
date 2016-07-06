const SessionApiUtil = require('./util/session_api_util');
const SessionStore = window.SessionStore = require('./stores/session_store');
const SessionActions = window.SessionActions = require('./actions/session_actions');
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const LoginForm = require('./components/login_form');
const SignUpForm = require('./components/signup_form');
const Navbar = require('./components/navbar');
const ProjectApiUtil = window.ProjectApitUtil = require('./util/project_api_util');
const ProjectActions = require('./actions/project_actions');
const ProjectIndex = require('./components/project_index');
const ProjectStore = window.ProjectStore = require('./stores/project_store');
const Project = require('./components/project');
const ProjectForm = require('./components/project_form');
const ProjectRewardsForm = require('./components/project_rewards_form');
const ProjectRewards = require('./components/project_rewards');
const RewardPurchase = require('./components/reward_purchase');

const App = React.createClass({
  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

const routes = (
<Router history={ hashHistory }>
  <Route path="/" component={App} >
    <IndexRoute component={ProjectIndex} />
    <Route path="login" component={LoginForm} />
    <Route path="signup" component={SignUpForm} />
    <Route path="discover" component={ProjectIndex} />
    <Route path="projects/new" component={ProjectForm} />
    <Route path="projects/:id" component={Project} />
    <Route path="projects/:id/rewards" component={ProjectRewards} />
    <Route path="projects/:id/rewards/new" component={ProjectRewardsForm} />
    <Route path="projects/:id/rewards/:reward_id" component={RewardPurchase} />
  </Route>
</Router>
);

document.addEventListener("DOMContentLoaded", function() {
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(routes, document.getElementById('content'));
});
