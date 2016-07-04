const React = require('react');
const ProjectActions = require('../actions/project_actions')

const ProjectForm = React.createClass({
  getInitialState(){
    return {
      title: '',
      content: '',
      author_id: currentUser.id,
      duration: '',
      goal: '',
      pledged: 0,
      featured: false,
      blurb: '',
      primary_img: '',
      city: '',
      state: '',
      complete: false
    };
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value} );
  },

  _handleSubmit(e) {
    debugger
    e.preventDefault();
    this.setState({goal: parseInt(this.state.goal), duration: parseInt(this.state.duration)})
    ProjectActions.createProject(this.state)
  },

  updateImage(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options, function(error, results){
      if (!error) {
        const url = results[0].url.replace('upload', 'upload/ar_1.77,c_crop');
        this.setState({ primary_img: url });
      }
    }.bind(this));
  },

  render(){
    return (
      <div>
        <div className="form-title">
          <h2>Make a Wish!</h2>
          <p>What's your wish? Here's your chance to tell the world about your story and your wish. You can even upload images to illustrate your wish. Give us all the details! </p>
        </div>
        <div className='project-form'>
          <form onSubmit={this._handleSubmit}>
            <ul>
              <li className="project-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Project Cover Photo</label></div>
                  <div className="form-wrapper">
                    <button onClick={this.updateImage}>Upload Image</button>
                  </div>
                 </div>
              </li>
              <li className="project-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Wish title</label></div>
                  <div className="form-wrapper">
                    <input type="text"
                           placeholder="title"
                           onChange={this.update("title")}
                           value={this.state.title} />
                         <p>Along with the blurb, this is the searchable portion of your wish</p>
                   </div>
                 </div>
              </li>
              <li className="project-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Wish Blurb</label></div>
                  <div className="form-wrapper">
                    <textarea
                           className="blurb-input"
                           rows="4"
                           cols="40"
                           onChange={this.update("blurb")}
                           value={this.state.blurb}></textarea>
                  </div>
                </div>
              </li>
              <li className="project-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Wish Content</label></div>
                  <div className="form-wrapper">
                    <textarea
                           className="content-input"
                           rows="10"
                           cols="60"
                           onChange={this.update("content")}
                           value={this.state.content}></textarea>
                  </div>
                </div>
              </li>
              <li className="project-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Wish Location</label></div>
                  <div className="form-wrapper">
                    <input type="text"
                           className="project-city"
                           placeholder="San Francisco"
                           onChange={this.update("city")}
                           value={this.state.city} />,
                    <input type="text"
                           placeholder="CA"
                           className="project-state"
                           onChange={this.update("state")}
                           value={this.state.state} />
                  </div>
                </div>

              </li>
              <li className="project-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Wish Duration</label></div>
                  <div className="form-wrapper">
                    <input type="text"
                           onChange={this.update("duration")}
                           value={this.state.duration} />
                    <p>The length of time you have to secure funding for your wish.</p>
                  </div>
                </div>
              </li>
              <li className="project-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label> Wish Cost</label></div>
                  <div className="form-wrapper">
                    <input type="text"
                           placeholder="0"
                           onChange={this.update("goal")}
                           value={this.state.goal} />
                  </div>
                </div>
              </li>
              <li className="project-form-li">
                <input type="submit" value="Make Wish" className="form-submit-button"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = ProjectForm;
