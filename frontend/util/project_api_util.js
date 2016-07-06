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
  }
};
