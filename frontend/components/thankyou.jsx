const React = require("react")

const Thankyou = React.createClass({
  render(){
    return (
      <div>
        <div className="purchase-complete-background">
          <div className="thankyou">
              <h2>Thank you!</h2>
              <p>
                Thank you for backing this project. Your contribution will be counted toward the wish, but won't be deducted from your account until the wish comes true.
              </p>
              <button className="back-button">Grant More Wishes</button>
          </div>


        </div>
      </div>
    )
  }
})

module.exports = Thankyou;
