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

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("signup");

    if (!errors) { return; }
    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
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
      <div className="signup-container">
        <div className="signup-title">Sign Up</div>
        <form onSubmit={this._handleSubmit}>
          <ul>
            <div>
              <li className="li">
                { this.fieldErrors("errors") }
                <input type="text"
                       placeholder="username"
                       onChange={this.update("username")}
                       value={this.state.username} />
              </li>
              <li className="li">
                <input type="password"
                       placeholder="password"
                       onChange={this.update("password")}
                       value={this.state.password} />
              </li>

            </div>
            <div>
              <li className="li">
                <input type="text"
                       placeholder="email"
                       onChange={this.update("email")}
                       value={this.state.email} />
              </li>
              <li className="li">
                <input type="text"
                       placeholder="first"
                       onChange={this.update("fname")}
                       value={this.state.fname} />
              </li>
              <li className="li">
                <input type="text"
                       placeholder="last"
                       onChange={this.update("lname")}
                       value={this.state.lname} />
              </li>
              <li className="li">
                <input type="submit" value="Sign Up" className="signup-button"/>
              </li>
            </div>
          </ul>
        </form>
        <div className="wrong-form"><Link to={'/login'}>Already have an account?</Link></div>
      </div>
    );
  }
})

module.exports = SignUpForm;
