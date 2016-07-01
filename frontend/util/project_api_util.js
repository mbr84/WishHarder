module.exports = {
  fetchProjects(cb) {
    $.ajax({
      url: '/api/projects',
      type: 'GET',
      success: function(res) {
        cb(res)}
    });
  },

  removeProject(id) {
    $.ajax({
      url: `/api/projects/${id}`,
      type: 'DELETE',
      success: function(res) {
        console.log(res)
      }
    });
  }
};