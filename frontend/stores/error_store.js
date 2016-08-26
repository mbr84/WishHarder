const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

let _errors = {};
let _form = '';

const ErrorStore = new Store(AppDispatcher);

ErrorStore.formErrors = function (form) {
  if (form === _form) {
    return _errors;
  }
};

ErrorStore.form = function () {
  return _form;
};

function setErrors(payload) {
  _errors = payload.errors;
  _form = payload.form;
  ErrorStore.__emitChange();
}

function clearErrors() {
  _errors = {};
  _form = '';
  ErrorStore.__emitChange();
}

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      break;
  }
};

module.exports = ErrorStore;
