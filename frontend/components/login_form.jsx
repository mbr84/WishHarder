const React = require('react')
const SessionActions = require('../actions/session_actions')
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store')
const ErrorActions = require('../actions/error_actions')

const LoginForm = React.createClass({
  getInitialState(){
    return ({ username: "", password: "" })
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
	},

  componentWillMount() {
    ErrorActions.clearErrors();
  },

  componentDidMount(){
    this.loginListener = SessionStore.addListener(this.loginRedirect);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.props.toggleFooter()
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.loginListener.remove();
  },

  fieldErrors(field) {
    let errors = ErrorStore.formErrors("login");

    if (!errors || !errors[field]) { return; }
    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  loginRedirect(){
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/")
    }
  },

  _handleDemo() {
    const that = this
    let i = 1;
    const demoUser = "breakfast"
    const intervalID = setInterval(function () {
      if (i < 10) {
        that.setState({ username: demoUser.slice(0, i) });
      } else if (i === 10) {
        that.setState({ password: "password" });
      } else {
        window.clearInterval(intervalID);
        SessionActions.login({ user: that.state })
      }
      i++
    }, 100);
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
                 { this.fieldErrors("errors") }
              <li className="li">
                <input type="text"
                       placeholder="username"
                       onChange={this.nameChange}
                       value={this.state.username} />
              </li>
              <li className="li">
                  <input type="password"
                         placeholder="password"
                         onChange={this.passwordChange}
                         value={this.state.password} />
              </li>
              <li className="li">
                <input type="submit"
                       value="Log Me In!"
                       className="login-button"/>
              </li>
              <li className="check" >
                <input className="check-box"
                       type="checkbox" /> Remember Me
              </li>
              <li className="form-text">Or</li>
              <li className="li">
                <input type="button"
                       value="Log in with Demo"
                       className="demo"
                       onClick={this._handleDemo} />
                     <p className="form-text">We'll never post anything on Demo without your permission</p>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = LoginForm;
