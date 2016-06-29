const React = require('react')
const SessionActions = require('../actions/session_actions')
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store')

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
        <div>
          <form onSubmit={this._handleSubmit}>
            <label className="signin-field">Username

              <input type="text"
                     onChange={this.nameChange}
                     value={this.state.username} />
            </label>
            <br />
            <label className="signin-field">Password

              <input type="password"
                     onChange={this.passwordChange}
                     value={this.state.password} />
            </label>
            <br />
            <div>
              <input type="submit" value="Log In" className="login-button"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = LoginForm;
