const React = require('react')

module.exports = React.createClass({
  render(){
    return  (
      <footer>
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-top-left">
              <div className="pr-container">
                <ul className="pr-links">
                  <h5>About Us</h5>
                  <li>Our Wission</li>
                  <li>The Team</li>
                  <li>Jobs</li>
                  <li>Press</li>
                  <li>Newletters</li>
                  <li>Spotlight</li>
                </ul>
              </div>
              <div className="help-container">
                <ul>
                  <h5>Help</h5>
                  <li>Support</li>
                  <li>FAQ</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="footer-top-right">


            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo">Wish<span className="footer-span">Harder</span></div>
            <p>2016</p>
          </div>
        </div>
      </footer>
    );
  }
});
