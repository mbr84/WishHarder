const CheckoutConstants = require('../constants/checkout_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

const CheckoutActions = {
  receiveCheckout (checkout) {
    AppDispatcher.dispatch({
      actionType: CheckoutConstants.CHECKOUT_RECEIVED,
      checkout: checkout
    });
  }
};

module.exports = CheckoutActions;
