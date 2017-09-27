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

    return shuffledPhotos.map((url, index) => ({
      id: index,
      src: url,
      isFlipped: false
    }))
  }

  // New function wich will take one argument, a "card src"
  handleCardClicked = (cardSrc) => {
    alert ("you clicked " + cardSrc)
  }

  // onCardClick is a prop for Card
  // We're passing a callback function, "onCardClick", to the Card and then running it in the Card component
  // Wich the Card can invoke when clicked
  render() {

    return (
      <div>
        <header className="game-header">
          <h1>Where is the Bunny?</h1>
        </header>

        <div className="card-container">
          {this.state.cards.map((card) => (
            <Card key={card.id} src={card.src} onCardClick={this.handleCardClicked} />
          ))}
        </div>
      </div>
    )
  }
}

export default Game
