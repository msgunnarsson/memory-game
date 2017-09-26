import React from "react"
import Card from "./Card"
import Counter from "./Counter"

class Game extends React.Component {

  state = {
    cards: [
      {
        src: "/images/bunny1.jpg"
      },
      {
        src: "/images/bunny2.jpg"
      },
      {
        src: "/images/bunny3.jpg"
      },
      {
        src: "/images/bunny4.jpg"
      },
      {
        src: "/images/bunny5.jpg"
      }
    ]
  }

  render() {

    return (
      <div>
        <header className="game-header">
          <h1>Where is the Bunny?</h1>
        </header>

        <div className="card-container">
          {this.state.cards.map((card) => (
            <Card src={card.src} />
          ))}
        </div>
      </div>
    )
  }
}

export default Game
