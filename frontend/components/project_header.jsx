const React = require('react');

const ProjectHeader = React.createClass({
  render(){
    <div>
      <article>
        <figure>
          {this.props.project.primary_img}
        </figure>
        <div>
          <div className="where">
            {this.props.project.city}, {this.props.project.state}
          </div>
          <div className="blurb">
            {this.props.project.blurb}
          </div>
          <div className="share-bar">

            <div className="share-bar-title">
              <div>
                <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="15px" id="Layer_1" style="enable-background:new 0 0 15 15;" version="1.1" viewBox="0 0 15 15" width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M38.167,22.283c-2.619,0.953-4.274,3.411-4.086,6.101  l0.063,1.038l-1.048-0.127c-3.813-0.487-7.145-2.139-9.974-4.915l-1.383-1.377l-0.356,1.017c-0.754,2.267-0.272,4.661,1.299,6.271  c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.169-0.943-0.296-0.985-0.233c-0.146,0.149,0.356,2.076,0.754,2.839  c0.545,1.06,1.655,2.097,2.871,2.712l1.027,0.487l-1.215,0.021c-1.173,0-1.215,0.021-1.089,0.467  c0.419,1.377,2.074,2.839,3.918,3.475l1.299,0.444l-1.131,0.678c-1.676,0.976-3.646,1.526-5.616,1.567  C20.775,43.256,20,43.341,20,43.405c0,0.211,2.557,1.397,4.044,1.864c4.463,1.377,9.765,0.783,13.746-1.568  c2.829-1.674,5.657-5,6.978-8.221c0.713-1.715,1.425-4.851,1.425-6.354c0-0.975,0.063-1.102,1.236-2.267  c0.692-0.678,1.341-1.419,1.467-1.631c0.21-0.403,0.188-0.403-0.88-0.043c-1.781,0.636-2.033,0.551-1.152-0.402  c0.649-0.678,1.425-1.907,1.425-2.267c0-0.063-0.314,0.042-0.671,0.233c-0.377,0.212-1.215,0.53-1.844,0.72l-1.131,0.361l-1.027-0.7  c-0.566-0.381-1.361-0.805-1.781-0.932C40.766,21.902,39.131,21.944,38.167,22.283z M34,64C17.432,64,4,50.568,4,34  C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#010101;"/></svg>
                Tweet
              </div>
              <div>
                <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="15px" id="Layer_1" style="enable-background:new 0 0 15 15;" version="1.1" viewBox="0 0 15 15" width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M3,4h60v60H3V4z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#010101;"/></svg>
                Share
              </div>
              <div>
                <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="15px" id="Layer_1" style="enable-background:new 0 0 15 15;" version="1.1" viewBox="0 0 15 15" width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M23.794,26.282v5.579h2.79v8.37  c0.22,6.844,3.982,8.27,8.369,8.742c2.55-0.128,5.674-1.072,7.253-2.326v-4.742c-2.031,1.974-7.484,3.91-8.462-1.674l-0.094-8.462  l8.556,0.093v-5.672H33.65l0.187-7.161l-3.44,0.093C30.633,25.229,27.387,26.047,23.794,26.282z M3,4h60v60H3V4z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#010101;"/></svg>
                Post
              </div>
              <div>
                <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 144.083 144" height="15px" id="Pinterest" version="1.1" viewBox="0 0 144.083 144" width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M72.041,14.166C40.1,14.166,14.208,40.06,14.208,72c0,31.939,25.893,57.834,57.833,57.834S129.875,103.939,129.875,72  C129.875,40.06,103.981,14.166,72.041,14.166z M99.586,65.34c-0.688,8.231-6.709,17.835-12.271,20.579  c-5.564,2.744-11.51,2.744-14.939,1.067c0,0-4.421-2.668-5.03-3.431c-0.381,0.305-1.601,7.851-3.43,12.576  s-4.344,9.375-7.927,11.509c-1.295-4.268-0.457-14.786,2.058-24.085c2.517-9.298,3.507-13.643,3.507-13.643  s-3.201-6.098-0.076-12.804c3.125-6.707,8.993-5.183,10.137-4.116c1.144,1.067,3.201,1.905,1.524,8.765  c-1.677,6.86-4.497,13.567-2.134,17.226c1.447,2.058,9.146,3.734,13.489-2.058c3.507-5.869,4.88-8.536,5.032-17.759  c0,0,0.164-14.797-13.035-15.7c-11.127-0.763-16.266,3.991-19.663,7.316c-3.582,3.506-6.249,13.108-2.896,18.444  c1.677,2.362,1.753,3.734,1.524,5.106s-1.296,3.43-1.296,3.43s-9.45-1.676-9.907-13.262c-0.458-11.585,4.953-18.216,9.755-21.874  c4.803-3.658,13.135-8.333,29.598-5.284C94.479,40.291,101.338,49.64,99.586,65.34z"/></svg>
                Pin
              </div>
            </div>
          </div>
        </div>
      </article>
      <aside>
        

      </aside>
    </div>
  }
})

module.exports = ProjectHeader;
