module.exports = {
  signup(userData, successCallback, errorCallback) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      data: userData,
      success: function (res) {
        successCallback(res);
      },
      error: function (res) {
        errorCallback(res);
      },
    });
  },

  login(userData, successCallback, errorCallback) {
    $.ajax({
      url: 'api/sessions',
      type: 'POST',
      data: userData,
      success: function (res) {
        successCallback(res);
      },
      error: function (res) {
        errorCallback(res);
      },
    });
  },

  logout(successCallback, errorCallback) {
    $.ajax({
      url: 'api/sessions',
      type: 'DELETE',
      success: function (res) {
        successCallback(res);
      },
      error: function (res) {
        console.log(res);
      },
    });
  },
};
