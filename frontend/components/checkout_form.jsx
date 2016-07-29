const React = require('react');
const ProjectApiUtil = require('../util/project_api_util');
const hashHistory = require('react-router').hashHistory;

const CheckoutForm = React.createClass({
  getInitialState()  {
    return {
      name: "",
      cardNumber: "",
      cvc: "",
      expiration: "",
      country: "United States",
      postalCode: "",
      street: "",
      street2: "",
      city: "",
      province: ""
    };
  },

  fillData(){
    this.setState({
      name: "Walt Flanigan",
      cardNumber: "4242424242424242",
      cvc: "123",
      expiration: "03/2020",
      country: "United States",
      postalCode: "94102",
      street: "1412 Market",
      street2: "325",
      city: "San Francisco",
      province: "CA"
    })
  },

  submitStripeRequest() {
    const card = {
      number: this.state.cardNumber,
      cvc: this.state.cvc,
      exp: this.state.expiration
    };

    Stripe.card.createToken(card, function (status, response) {
      if (status === 200) {
        ProjectApiUtil.createRewardingFromCheckout(
          this.props.checkout.id,
          response.id,
          function() {
            hashHistory.push('/discover');
          },
          function() {
            this.setState({ errorMessage: "There was an error processing your request. Please try again"})
          }.bind(this)
        );
      } else {
        this.setState({ errorMessage: "Card invalid. Please ensure the" +
        " card number, CVN, and expiration you entered match data on card." });
      }
    }.bind(this));
  },

  handleSubmit(){
    if (this.state.name === "" ||
      !Stripe.card.validateCardNumber(this.state.cardNumber) ||
        !Stripe.card.validateExpiry(this.state.expiration) ||
          !Stripe.card.validateCVC(this.state.cvc)) {
      this.setState({errorMessage: "Make sure all field are filled correctly"})
    } else {
      this.submitStripeRequest()
    }
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render(){
    return (
      <div className="form-wrapper">
        <div className="stripe-blurb">
          On the other hand you could just click this button
          <button onClick={this.fillData} className="back-button top-button">
            Go!
          </button>
        </div>
        <form className="checkout-form"
              onSubmit={this.handleSubmit}>
              <h5 className="error-message">{this.props.errorMessage}{this.state.errorMessage}</h5>
          <h3 className="checkout-form-header">
            Card Information
          </h3>


          <div className="credit-info-container">
            <div className="credit-info-item">
              <label className="checkout-label">Name on Card</label>
              <input type="text"
                     id="cardNumber"
                     className="credit-input"
                     value={this.state.name}
                     placeholder={"name"}
                     onChange={this.update("name")} />
            </div>

            <div className="credit-info-item">
              <label className="checkout-label">Card Number</label>
              <input type="text"
                     id="cardNumber"
                     className="credit-input"
                     value={this.state.cardNumber}
                     placeholder={"Card number"}
                     onChange={this.update("cardNumber")} />
            </div>
            <div className="credit-info-item">
              <label className="checkout-label">Expiration</label>
              <input type="text"
                     id="expiration"
                     className="credit-input"
                     value={this.state.expiration}
                     placeholder={"month-year"}
                     onChange={this.update("expiration")} />
            </div>
            <div className="credit-info-item">
              <label className="checkout-label">CVN</label>
              <input type="text"
                     id="cvc"
                     className="credit-input"
                     value={this.state.cvc}
                     placeholder="999"
                     onChange={this.update("cvc")} />
            </div>

          </div>
          <h3 className="checkout-form-header">
            Billing Information
          </h3>
          <div className="credit-info-container">
            <div className="credit-info-item">
              <label className="checkout-label">Street</label>
              <input type="text"
                     id="street"
                     value={this.state.street}
                     placeholder={"1300 Pennsylvania"}
                     onChange={this.update("street")} />
            </div>
            <div className="credit-info-item">
              <label className="checkout-label"></label>
              <input type="text"
                     id="street2"
                     value={this.state.street2}
                     placeholder={"Apt 5"}
                     onChange={this.update("street2")} />
            </div>
            <div className="credit-info-item">
              <label className="checkout-label">City</label>
              <input type="text"
                     id="city"
                     value={this.state.city}
                     placeholder={"San Francisco"}
                     onChange={this.update("city")} />
            </div>
            <div className="credit-info-item">
              <label className="checkout-label">State</label>
              <input type="text"
                     id="state"
                     value={this.state.provice}
                     placeholder={"CA"}
                     onChange={this.update("province")} />
            </div>
            <div className="credit-info-item">
              <label className="checkout-label">Zip Code</label>
              <input type="text"
                id="zip"
                value={this.state.postalCode}
                placeholder="60623"
                onChange={this.update("postalCode")} />
            </div>

          </div>

          <input type="submit"
            className="back-button"
            value="Back Project!" />
        </form>
      </div>
    )

  }
});

module.exports = CheckoutForm
