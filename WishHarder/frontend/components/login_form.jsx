const React = require('react')
const SessionActions = require('../actions/session_actions')
const SessionStore = require('../stores/session_store')

const LoginForm = React.createClass({
  getInitialState(){
    return ({ username: "", password: "" })
  },

  componentDidMount(){
    SessionStore.addListener(this.loginRedirect)
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
      <div>
        <form onSubmit={this._handleSubmit}>
          <label className="signin-field">Username</label>
          <input type="text"
                 onChange={this.nameChange}
                 value={this.state.username} />
          <br />
          <label className="signin-field">Password</label>
          <input type="password"
                 onChange={this.passwordChange}
                 value={this.state.password} />
          <br />
          <div>
            <input type="submit" value="Log In" className="login-button"/>
          </div>
        </form>
      </div>
    );
  }
})

module.exports = LoginForm;
