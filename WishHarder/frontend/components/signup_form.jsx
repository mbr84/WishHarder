const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;
const ErrorStore = require('../stores/error_store');

const SignUpForm = React.createClass({
  getInitialState(){
    return ({ fname: "", lname: "", username: "", password: "", email: "" })
  },

  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  componentDidMount(){
    this.loginListener = SessionStore.addListener(this.signupRedirect)
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.loginListener.remove();
  },

  signupRedirect(){
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  _handleSubmit(e){
    e.preventDefault();
    SessionActions.signup({ user: this.state });
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render(){
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <div>
            <label className="signup-field">Username</label>
            <input type="text"
                   onChange={this.update("username")}
                   value={this.state.username} />
            <br />
            <label className="signup-field">Password</label>
            <input type="password"
                   onChange={this.update("password")}
                   value={this.state.password} />
            <br />
          </div>
          <div>
            <label className="signup-field">Email</label>
            <input type="text"
                   onChange={this.update("email")}
                   value={this.state.email} />
            <br />
            <label className="signup-field">First</label>
            <input type="text"
                   onChange={this.update("fname")}
                   value={this.state.fname} />
            <br />
            <label className="signup-field">Last</label>
            <input type="text"
                   onChange={this.update("lname")}
                   value={this.state.lname} />
            <br />
          </div>
          <div>
            <input type="submit" value="Log In" className="signup-button"/>
          </div>
        </form>
        <div><Link to={'/signup'}>Already have an account?</Link></div>
      </div>
    );
  }
})

module.exports = SignUpForm;
