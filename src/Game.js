import React from "react"
import Card from "./Card"
import uuidv4 from "uuid/v4"


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
      id: uuidv4(),
      src: url,
      isFlipped: false
    }))
  }

  // This function will be called from the Card component because we have passed it as a prop (called whenClicked)
  // when we render the Card component
  //
  // To generate the new state, we need to .ap over the old state, and, if the the cadr we're mapping over is the clicked card, we need ti set it's 'isFlipped' value to be 'true'. Otherwise we don't need to change the state for that card.
  //
  // Finally, we can use 'this.setState' with this new array we've built.
  handleCardClicked = (clickedCardId) => {
    const newCardState = this.state.cards.map((card) => {

      if ( card.id === clickedCardId ) {
        card.isFlipped = true
      }

      return card
    })

    this.setState({ cards: newCardState}, this.checkIfCardsMatched )
  }

  checkIfCardsMatched = () => {

    const flippedCards = this.state.cards.filter((card) => {
      if (card.isFlipped) {
        return true
      }
    })


    if (flippedCards.length === 2) {

      const resetCards = this.state.cards.map((card) => {

        if ( card.isFlipped ) {
          card.isFlipped = false
        }

        return card
      })

      this.setState({ cards: resetCards} )
    }
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
            <Card
              key={card.id}
              cardId={card.id}
              src={card.src}
              onCardClick={this.handleCardClicked}
              isFlipped={card.isFlipped} />
          ))}
        </div>
      </div>
    )
  }
}

export default Game
