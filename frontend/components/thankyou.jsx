const React = require("react");
const hashHistory = require("react-router").hashHistory

const Thankyou = React.createClass({
  _handleClick(){
    hashHistory.push('/discover');
  },

  render(){
    return (
      <div>
        <div className="purchase-complete-background">
          <div className="thankyou">
              <h4>Thank you!</h4>
              <p>
                Thank you for backing this project. Your contribution will count toward the wish, but won't be deducted from your account until the wish comes true.
              </p>
              <button onClick={this._handleClick}
                      className="back-button">Grant More Wishes</button>
          </div>


        </div>
        <div className="thankyou-footer"></div>
      </div>
    )
  }
})

module.exports = Thankyou;
