module.exports = {
  signup(userData, successCallback, errorCallback) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      data: userData,
      success: function (res) {
        successCallback(res);
      },
      error(xhr) {
  			                                                            const errors = xhr.responseJSON;
				                                                                                errorCallback('signup', errors);
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
      error(xhr) {
				                                                                                const errors = xhr.responseJSON;
				                                                                                errorCallback('login', errors);
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
        errorCallback(res);
      },
    });
  },
};
