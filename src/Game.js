import React from "react"
import Card from "./Card"
import Counter from "./Counter"

const Game = () => (
  <div>
    <header className="game-header">
      <h1>Where is the Bunny?</h1>
    </header>
    <div className="card-container">
      <Card src="/images/bunny1.jpg" />
      <Card src="/images/bunny2.jpg" />
      <Card src="/images/bunny3.jpg" />
      <Card src="/images/bunny1.jpg" />
      <Card src="/images/bunny2.jpg" />
      <Card src="/images/bunny5.jpg" />
      <Card src="/images/bunny3.jpg" />
      <Card src="/images/bunny4.jpg" />
      <Card src="/images/bunny4.jpg" />
      <Card src="/images/bunny5.jpg" />
    </div>
  </div>
)

export default Game
