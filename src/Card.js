import React from "react";

// Defining a "Card" component. That component is inheriting functions from React.Component
class Card extends React.Component {

  // The function we call from onClick.We give it a name 'handleClick' and it takes no arguments.
  // Because it's in a class, it has access to 'this'.
  // So it can use this.props.src
  //
  // This will call the `onCardClick` function which was passed into the Card
  // as a prop from the Game component.
  handleClick = () => {
    this.props.onCardClick(this.props.cardId)
  }

  // render() is a required function for our component.
  // React will invoke this function when it mounts the component.
  render() { // render function definition. NOT using the fat arrow.
    // The render function needs to return JSX.
    // JSX is basically HTML, but you can use components as well,
    // for example, when we render this card, we do so in the Game component by using <Card />
    // Props become and object, so className="foo", becomes { className: "foo" }
    // on this.props, and onClick becomes { onClick: () => {} }
    return(
      <div className="card" onClick={this.handleClick}>
        <img src={this.props.src} />
      </div>
    )
  }
}

// To be able to use `import Card from "./card"`, we need to export it
export default Card
