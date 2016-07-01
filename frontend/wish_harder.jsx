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
const ProjectStore = window.ProjectStore = require('./stores/project_store')

window.ProjectActions = ProjectActions
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
    <Route path="login" component={LoginForm} />
    <Route path="signup" component={SignUpForm} />
    <Route path="discover" component={ProjectIndex} />
  </Route>
</Router>
);

document.addEventListener("DOMContentLoaded", function() {
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(routes, document.getElementById('content'));
});
