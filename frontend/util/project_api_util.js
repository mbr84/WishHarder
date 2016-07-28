const CheckoutActions = require('../actions/checkout_actions');

module.exports = {
  fetchProjects(cb) {
    $.ajax({
      url: '/api/projects',
      type: 'GET',
      success: function(res) {
        cb(res)}
    });
  },

  fetchProject(id, cb) {
    $.ajax({
      url: `/api/projects/${id}`,
      type: 'GET',
      success: function(res) {
        cb(res)}
    });
  },

  createProject(project, cb) {
    $.ajax({
      url: '/api/projects',
      type: 'POST',
      data: {project: project},
      success: function(res) {
        cb(res)}
    })
  },

  removeProject(id, cb) {
    $.ajax({
      url: `/api/projects/${id}`,
      type: 'DELETE',
      success: function(res) {
        cb(res)
      }
    });
  },

  createReward(reward, cb) {
    $.ajax({
      url: '/api/rewards',
      type: 'POST',
      data: { reward: reward },
      success: function(res) {
        cb(res);
      }
    });
  },

  createRewarding(rewarding, cb) {
    $.ajax({
      url: '/api/rewardings',
      type: 'POST',
      data: { rewarding: rewarding },
      success: function(res) {
        cb(res);
      }
    });
  },

  createCheckout(id, cost, successCallback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: '/api/checkouts',
      dataType: 'json',
      data: { checkout: {reward_id: id, cost: cost * 100 } },
      success: function (checkout) {
        CheckoutActions.receiveCheckout(checkout);
        successCallback(checkout);
      },
      error: function () {
        errorCallback();
      }
    });
  },

  getCheckout(id, successCallback, errorCallback) {
    $.ajax({
      type: 'GET',
      url: '/api/checkouts/' + id,
      dataType: 'json',
      success: function (checkout) {
        CheckoutActions.receiveCheckout(checkout);
        if (successCallback) { successCallback(); }
      },
      error: function () {
        if (errorCallback) { errorCallback(); }
      }
    });
  },

  createRewardingFromCheckout: function (id, stripeToken,
    successCallback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: '/api/rewardings',
      dataType: 'json',
      data: { rewarding: { id: id, stripeToken: stripeToken } },
      success: function () {
        if (successCallback) { successCallback(); }
      },
      error: function () {
        if (errorCallback) { errorCallback(); }
      }
    });
  },
};
