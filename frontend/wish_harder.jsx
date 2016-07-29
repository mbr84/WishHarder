const SessionApiUtil = require('./util/session_api_util');
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');
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
const ProjectApiUtil = require('./util/project_api_util');
const ProjectActions = require('./actions/project_actions');
const ProjectIndex = require('./components/project_index');
const ProjectStore = require('./stores/project_store');
const Project = require('./components/project');
const ProjectForm = require('./components/project_form');
const ProjectRewardsForm = require('./components/project_rewards_form');
const ProjectRewards = require('./components/project_rewards');
const RewardPurchase = require('./components/reward_purchase');
const Footer = require('./components/footer')
const Checkout = require('./components/checkout')
const Thankyou = require('./components/thankyou')
const CheckoutStore = require('./stores/checkout_store')

const App = React.createClass({
  getInitialState(){
    return {showFooter: false};
  },
  _toggleFooter(){
    if (!this.state.showFooter) {
      this.setState({showFooter: true});
    }
  },

  render () {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        toggleFooter: this._toggleFooter
      });
    });
    return (
      <div>
        <Navbar />
        {children}
        <Footer show={this.state.showFooter} />
      </div>
    );
  }
});

const routes = (
<Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
  <Route path="/" component={App} >
    <IndexRoute component={ProjectIndex} />
    <Route path="login" component={LoginForm} />
    <Route path="signup" component={SignUpForm} />
    <Route path="discover" component={ProjectIndex} />
    <Route path="projects/new"
           component={ProjectForm}
           onEnter={ _ensureLoggedIn }/>
    <Route path="projects/:id" component={Project} />
    <Route path="projects/:id/rewards"
           component={ProjectRewards}
           onEnter={ _ensureLoggedIn } />
    <Route path="projects/:id/rewards/new"
           component={ProjectRewardsForm}
           onEnter={ _ensureLoggedIn }/>
    <Route path="projects/:id/rewards/:reward_id"
           component={RewardPurchase}
           onEnter={ _ensureLoggedIn }/>
    <Route path="checkouts/:id"
           component={Checkout}
           onEnter={ _ensureLoggedIn }/>
    <Route path="thankyou"
           component={Thankyou} />
  </Route>
</Router>
);
function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

document.addEventListener("DOMContentLoaded", function() {
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(routes, document.getElementById('content'));
});
