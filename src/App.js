import React, {Component} from 'react';
import PlayerCard from './PlayerCard'

class Game extends Component {
  constructor(){
    super();
    this.signs = ["rock","scissors","paper"];
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors",
    }
  }

  ///this is where my methods lives
  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random()*3)],
      playerTwo: this.signs[Math.floor(Math.random()*3)],
    })
  }

decidedWinner = () => {
  const playerOne = this.state.playerOne
  const playerTwo = this.state.playerTwo

  if (playerOne === playerTwo){
    return "It's a tie!"
  }
  else if ((playerOne === "rock" && playerTwo === "scissors") ||
           (playerOne === "scissors" && playerTwo === "paper") ||
           (playerOne === "paper" && playerTwo === "rock")) {
             return "Player 1 Wins!"
  } else {
    return "Player 2 wins!!"
  }
}

  render() {
    return (
      <div className="container">
        <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner"> {this.decidedWinner()} </div>
        <button type="button" onClick={this.playGame}> Play the Game </button>
      </div>
    )
  }
};

export default Game;
