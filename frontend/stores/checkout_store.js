const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const CheckoutConstants = require('../constants/checkout_constants');

const CheckoutStore = new Store(AppDispatcher);

let _currentCheckout = null;

CheckoutStore.currentCheckout = function () {
  const checkoutCopy = {};
  if (_currentCheckout) {
    for (const id in _currentCheckout) {
      if (_currentCheckout.hasOwnProperty(id)) {
        checkoutCopy[id] = _currentCheckout[id];
      }
    }
  } else {
    checkoutCopy = null;
  }
  return checkoutCopy;
};

CheckoutStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CheckoutConstants.CHECKOUT_RECEIVED:
      _currentCheckout = payload.checkout;
      CheckoutStore.__emitChange();
      break;
  }
};

module.exports = CheckoutStore;
