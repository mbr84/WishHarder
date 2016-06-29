  const React = require('react');
  const LoginForm = require('./login_form');
  const SignUpForm = require('./signup_form');
  const Modal = require('react-modal');

  const SessionHeader = React.createClass({
    getInitialState(){
      return( {modalOpen: false,
               signIn: true });
    },

    _handleClick(bool){
      this.setState({ modalOpen: true,
                      signIn: bool });
    },

    onModalClose(){
      this.setState({ modalOpen: false });
    },

    render() {

      let component = (this.state.logIn) ? <LoginForm /> : <SignUpForm />;
      return (
        <div>
          <button id="sign-in-button"
                  onClick={this._handleClick(true)}>
              Sign In
          </button>
          <button id="sign-up-button"
                  onClick={this._handleClick(false)}>
              Sign Up
          </button>

          <Modal
            isOpen={this.state.modalOpen}

            onRequestClose={this.onModalClose}
            closeTimeoutMS={250}>
            {component}


          </Modal>
        </div>
      )
    }
  });

  module.exports = SessionHeader;
