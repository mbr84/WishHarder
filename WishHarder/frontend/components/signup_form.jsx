const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const SignUpForm = React.createClass({
  getInitialState(){
    return ({ fname: "", lname: "", username: "", password: "", email: "" })
  },

  componentDidMount(){
    SessionStore.addListener(this.signupRedirect)
  },

  signupRedirect(){
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  _handleSubmit(e){
    e.preventDefault();
    SessionActions.signup({ user: this.state })
  },

  nameChange(e) {
    this.setState({ username: e.target.value})
  },

  passwordChange(e) {
    this.setState({ password: e.target.value})
  },
  emailChange(e) {
    this.setState({ email: e.target.value})
  },
  fnameChange(e) {
    this.setState({ fname: e.target.value})
  },
  lnameChange(e) {
    this.setState({ lname: e.target.value})
  },

  render(){
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label className="signup-field">Username</label>
          <input type="text"
                 onChange={this.nameChange}
                 value={this.state.username} />
          <br />
          <label className="signup-field">Password</label>
          <input type="password"
                 onChange={this.passwordChange}
                 value={this.state.password} />
          <br />
          <label className="signup-field">Email</label>
          <input type="text"
                 onChange={this.emailChange}
                 value={this.state.email} />
          <br />
          <label className="signup-field">First</label>
          <input type="text"
                 onChange={this.fnameChange}
                 value={this.state.fname} />
          <br />
          <label className="signup-field">Last</label>
          <input type="text"
                 onChange={this.lnameChange}
                 value={this.state.lname} />
          <br />
          <div>
            <input type="submit" value="Log In" className="signup-button"/>
          </div>
        </form>
      </div>
    );
  }
})

module.exports = SignUpForm;
