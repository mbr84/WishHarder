const React = require('react')

module.exports = React.createClass({
  render(){
    return  (
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">Wish<span className="footer-span">Harder</span></div>
          </div>
          <div className="footer-right">
            <div className="help-links">
              <ul>
                <li>HELP</li>
                <li>FAQ</li>
                <li>Support</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div className="pr-links">
              <ul>
                <li>About Us</li>
                <li>Our Crew</li>
                <li>Core Values</li>
                <li>Our Wission</li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    );
  }
});
