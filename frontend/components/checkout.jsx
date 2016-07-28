const React = require('react');
const CheckoutStore = require('../stores/checkout_store');
const hashHistory = require('react-router').hashHistory;
const CheckoutForm = require('./checkout_form');
const ProjectApiUtil = require('../util/project_api_util')

const Checkout = React.createClass({
  getInitialState(){
    ProjectApiUtil.getCheckout(parseInt(this.props.params.id))
    let checkout = CheckoutStore.currentCheckout()
    return { checkout: checkout }
  },

  componentDidMount(){
    this.checkoutListener = CheckoutStore.addListener(this._onChange)
  },

  _onChange(){
    let checkout = CheckoutStore.currentCheckout();
    this.setState({ checkout: checkout})
  },

  componentWillUnmount(){
    this.checkoutListener.remove();
  },

  _handleSubmit(){
    ProjectActions.createRewarding({ reward_id: this.props.params.reward_id});
    hashHistory.push(`/projects/${this.props.params.id}`);
  },

  render(){
    if (CheckoutStore.currentCheckout()) {
      return (
        <div>
          <div className="form-title">
            <h2>support {this.state.checkout.author.username}s wish</h2>
            <p></p>
          </div>
          <CheckoutForm checkout={this.state.checkout}/>
        </div>
      )
    } else {
      return <div></div>
    }
  }
});

module.exports = Checkout;
