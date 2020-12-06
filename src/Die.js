import React, { Component } from "react";

class Die extends Component {
  static defaultProps = {
    number: 1
  };

  map = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
  };

  numberMap = number => {
    return this.map[number];
  };

  render() {
    let number = this.numberMap(this.props.number);
    let dieClass = `fas fa-dice-${number}`;

    return (
      <div>
        <i className={dieClass} />
      </div>
    );
  }
}

export default Die;
