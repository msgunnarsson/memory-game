import React from "react"

class SuccessMessage extends React.Component {

  render() {
    return(
      <div className="success-message">
        <p><span className="flipped" role="img">🎉</span> Yaaaaay, you did it! <span role="img">🎉</span></p>

      </div>
    )
  }
}

export default SuccessMessage
