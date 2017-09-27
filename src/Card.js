import React from "react";

class Card extends React.Component {

  handleClick = () => {
    alert ("clicked on " + this.props.src)
  }

  render() {

    return(
      <div className="card" onClick={this.handleClick}>
        <img src={this.props.src} />
      </div>
    )
  }
}

export default Card
