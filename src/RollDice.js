import React, { Component } from "react";
import Die from "./Die.js";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roll1: 1,
      roll2: 2
    };
  }

  rollDie = () => {
    this.setState({ roll1: this.randomNumber(), roll2: this.randomNumber() });
  };

  randomNumber = (size = 6) => {
    return Math.floor(Math.random() * size) + 1;
  };

  render() {
    return (
      <div>
        <Die number={this.state.roll1} />
        <Die number={this.state.roll2} />
        <button onClick={this.rollDie}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
