const React = require('react');
const ProjectApiUtil = require('../util/project_api_util');
const hashHistory = require('react-router').hashHistory;

const CheckoutForm = React.createClass({
  getInitialState()  {
    return {
      name: "",
      cardNumber: "",
      cvc: "",
      expirationMonth: "",
      expirationYear: "",
      country: "United States",
      postalCode: "",
    };
  },

  submitStripeRequest() {
    const card = {
      number: this.state.cardNumber,
      cvc: this.state.cvc,
      exp_month: this.state.expirationMonth,
      exp_year: this.state.expirationYear
    };

    Stripe.card.createToken(card, function (status, response) {
      if (status === 200) {
        ProjectApiUtil.createRewardingFromCheckout(
          this.props.checkout.id,
          response.id,
          function() {
            hashHistory.push('/discover');
          }
        );
      }
    }.bind(this));
  },

  handleSubmit(){
    if (this.state.name === "" ||
    !Stripe.card.validateCardNumber(this.state.cardNumber) ||
    !Stripe.card.validateExpiry(this.state.expirationMonth,
      this.state.expirationYear) ||
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
    const months = ["01","02","03","04","05","06","07",
    "08","09","10","11","12"].map((num) => {
      return <option key={num} value={num}>{num}</option>
    });

    let years = [new Date().getFullYear()]
    for (let i = 1; i < 15; i++) {
      years.push(years[0] + i)
    }
    years = years.map((year) => {
      return <option key={year} value={year}>{year}</option>
    });

    return (
      <form className="checkout-form"
            onSubmit={this.handleSubmit}>
            <h5 className="error-message">{this.state.errorMessage}</h5>
        <h3 className="checkout-form-header">
          Card Information
        </h3>


        <div className="credit-info-container">
          <div className="credit-info-item">
            <label className="checkout-label">Name</label>
            <input type="text"
                   id="cardNumber"
                   value={this.state.name}
                   placeholder={"name"}
                   onChange={this.update("name")} />
          </div>

          <div className="credit-info-item">
            <label className="checkout-label">Card Number</label>
            <input type="text"
                   id="cardNumber"
                   value={this.state.cardNumber}
                   placeholder={"Card number"}
                   onChange={this.update("cardNumber")} />
          </div>
          <div className="credit-info-item">
            <label className="checkout-label">Expiration</label>
            <div>
              <select id="expirationMonth"
                      className="checkout-select"
                      value={this.state.expirationMonth}
                      onChange={this.update("expirationMonth")}>
                      <option value="">{""}</option>
                      {months}
              </select>
              <select id="expirationYear"
                      className="checkout-select"
                      value={this.state.expirationYear}
                      onChange={this.update("expirationYear")}>
                      <option value="">{""}</option>
                      {years}
              </select>
            </div>
          </div>
          <div className="credit-info-item">
            <label className="checkout-label">CVN</label>
            <input type="text"
                   id="cvc"
                   value={this.state.cvc}
                   onChange={this.update("cvc")} />
          </div>
          <div className="credit-info-item">
            <label className="checkout-label">Zip Code</label>
            <input type="text"
                   id="zip"
                   value={this.state.postalCode}
                   onChange={this.update("postalCode")} />
          </div>

          <input type="submit"
                 className="back-button"
                 value="Back Project!" />

        </div>
      </form>
    )

  }
});

module.exports = CheckoutForm
