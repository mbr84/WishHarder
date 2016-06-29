const ErrorConstants = require('../constants/error_constants');

module.exports = {
  setErrors(payload){
    Dispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },

  clearErrors(payload){
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
    });
  }
};
