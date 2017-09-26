import React from "react"
import Card from "./Card"

const photos = [
  "/images/bunny1.jpg",
  "/images/bunny2.jpg",
  "/images/bunny3.jpg",
  "/images/bunny4.jpg",
  "/images/bunny5.jpg"
]

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: this.setupGame()
    }
  }

  setupGame = () => {
    const morePhotos = photos.concat(photos)

    return morePhotos.map((url) => ({
        src: url,
        isFlipped: false
      })
    )
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
