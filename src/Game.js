import React from "react"
import Card from "./Card"

//var shuffle = require('shuffle-array')
import shuffle from "shuffle-array"


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
    //Duplicate the photos by adding the same photos to the array
    const duplicatedPhotos = photos.concat(photos)

    //Take the duplicated photos and shuffle them with the imported shuffle function
    const shuffledPhotos = shuffle(duplicatedPhotos)

    return shuffledPhotos.map((url) => ({
      src: url,
      isFlipped: false
    }))
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
