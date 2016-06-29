const SessionApiUtil = window.SessionApiUtil= require('./util/session_api_util');
const SessionStore = window.SessionStore= require('./stores/session_store');
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
const Modal = require('react-modal');
const SessionHeader = require('./components/session_header');


const App = React.createClass({
  render () {
    return (
      <div>
        <h1></h1>
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
  </Route>
</Router>
);

document.addEventListener("DOMContentLoaded", function() {
  SessionActions.receiveCurrentUser(window.currentUser);
  // Modal.setAppElement(document.body);
  ReactDOM.render(routes, document.getElementById('content'));
});
