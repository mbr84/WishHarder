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
                <li className="list-leader">HELP</li>
                <li>Support</li>
                <li>FAQ</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="pr-container">
              <ul className="pr-links">
                <li className="list-leader">About Us</li>
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
