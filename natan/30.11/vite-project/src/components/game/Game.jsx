import { Component } from "react";

export default class Game extends Component {
  state = {
    arrayDisabled: [],
    gameOverDisplay: 0,
  };

  tempArrayDisabled = [];
  rngNums = [];
  gameOverCount = 0;

  componentDidMount() {
    while (this.rngNums.length < 10) {
      const num = Math.floor(Math.random() * 20+1);
      this.tempArrayDisabled[this.rngNums.length] = false;
      this.rngNums.push(num);
      if (num % 2 == 0) {
        this.gameOverCount++;
      }
    }
    this.setState({ arrayDisabled: this.tempArrayDisabled });
  }

  render() {
    const { arrayDisabled } = this.state;

    const clickHandler = (num, i) => {
      this.tempArrayDisabled[i] = true;
      this.setState({ arrayDisabled: this.tempArrayDisabled });
    //   this.rngNums.forEach((num,i) => {
    //     if (num % 2 == 0 && !this.state.arrayDisabled[i]) {
    //       return;
    //     }
    //     this.setState({ gameOverDisplay: 100 });
    //   });

      if (num % 2 == 0) {
        this.gameOverCount--;
        if (this.gameOverCount == 0) {
          this.setState({ gameOverDisplay: 100 });
        }
      }
    };

    return (
      <>
        <h1>Choose even</h1>
        {this.rngNums.map((num, i) => {
          return (
            <>
              <button
                disabled={arrayDisabled[i]}
                onClick={() => clickHandler(num, i)}
              >
                {num}
              </button>
            </>
          );
        })}
        <h3 style={{ opacity: this.state.gameOverDisplay }}>game over</h3>
      </>
    );
  }
}
