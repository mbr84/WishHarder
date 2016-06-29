const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants')

let _currentUser = {};

const SessionStore = new Store(AppDispatcher);

const _login = function (user) {
  _currentUser = user;
  SessionStore.__emitChange();
};

const _logout = function () {
  _currentUser = {};
  SessionStore.__emitChange();
};

SessionStore.currentUser = function () {
  return _currentUser;
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      break;
    case SessionConstants.LOGOUT:
      _logout();
      break;
  }
};

module.exports = SessionStore;
