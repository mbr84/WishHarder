const React = require('react');
const CheckoutStore = require('../stores/checkout_store');
const hashHistory = require('react-router').hashHistory;
const CheckoutForm = require('./checkout_form');
const ProjectApiUtil = require('../util/project_api_util');
const InfoPane = require('./info_pane');

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
    ProjectActions.createRewarding({ reward_id: this.checkout.reward.id});
    hashHistory.push(`/projects/${this.props.params.id}`);
  },

  render(){
    if (CheckoutStore.currentCheckout()) {
      return (
        <div>
          <div className="form-title">
            <h2 className="purchase-title">support {this.state.checkout.author.username}s wish</h2>
          </div>
          <div className="checkout-wrapper cf">
            <div className="stripe-blurb">
              Stipe payment api is currently running in test mode. but if you'd like to pretend to make a wish come true, you can use Stripe's test credit card, 4242424242424242, any future expiration date, and any 3 digit CVC/CVN.
            </div>
            <CheckoutForm checkout={this.state.checkout} />
            <InfoPane reward={this.state.checkout.reward}
                      backers={this.state.checkout.backers} />
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
});

module.exports = Checkout;
