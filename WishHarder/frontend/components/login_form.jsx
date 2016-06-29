const React = require('react')
const SessionActions = require('../actions/session_actions')
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store')
const Link = require('react-router').Link

const LoginForm = React.createClass({
  getInitialState(){
    return ({ username: "", password: "" })
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
	},

  componentDidMount(){
    this.loginListener = SessionStore.addListener(this.loginRedirect);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.loginListener.remove();
  },

  loginRedirect(){
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/")
    }
  },

  _handleSubmit(e){
    e.preventDefault();
    SessionActions.login({ user: this.state })
  },

  nameChange(e) {
    this.setState({ username: e.target.value})
  },

  passwordChange(e) {
    this.setState({ password: e.target.value})
  },

  render(){
    return (
      <div className="login-container">
        <div className="login-title">Log In</div>
        <div className="login-inner">
          <form onSubmit={this._handleSubmit}>
            <ul>
              <li>
                <label className="signin-field">

                  <input type="text"
                         placeholder="username"
                         onChange={this.nameChange}
                         value={this.state.username} />
                  </label>
              </li>
              <li>
                <label className="signin-field">

                  <input type="password"
                         placeholder="password"
                         onChange={this.passwordChange}
                         value={this.state.password} />
                </label>
              </li>
              <li>
                <div className="no-pass">Forgot your Password?</div>
              </li>
              <li>
                <input type="submit" value="Log Me In!" className="login-button"/>
              </li>
              <li className="check" >
                <input className="check-box" type="checkbox" /> Remember Me
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = LoginForm;
