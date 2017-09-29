import React from "react"
import Card from "./Card"
import SuccessMessage from "./SuccessMessage"
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
      cards: this.setupGame(),
      win: false
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
      isFlipped: false,
      isMatched: false
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
      // return card.isFlipped
      return card.isFlipped && !card.isMatched
    })


    if (flippedCards.length === 2) {

      //We have to match on the src because the ids are different even if its the same card
      const isMatch = flippedCards[0].src === flippedCards[1].src

      setTimeout(() => {

        const newCardState = this.state.cards.map((card) => {
          //If the card we are looping over is one of the newly flipped cards
          //set their status according to if they matched
          // if(flippedCards.includes(card))
          if(card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
            card.isFlipped = false; //If they matched, isFlipped should be true
            card.isMatched = isMatch; //Same for this
          }
          //If its not a matched card, or a flipped over card, just return it as it normally was.
          //(not flipped over or matched);
          return card
        })

        this.setState({ cards: newCardState }, this.gameEnd)
      }, 500)

    }
  }

  gameEnd = () => {
    const cardMatch = this.state.cards.filter((card) => {
      return card.isMatched
    })

    if(cardMatch.length === this.state.cards.length) {
      this.setState({ win: true })
    }
  }

  resetGame = () => {
    this.setState({ cards: this.setupGame(), win: false} )
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
            isFlipped={card.isFlipped}
            isMatched={card.isMatched} />
          ))}
          {this.state.win && <SuccessMessage />}
        </div>
        <button className="reset-btn" onClick={this.resetGame}>{this.state.win ? "New game" : "Reset game"}</button>
      </div>
    )
  }
}

export default Game
