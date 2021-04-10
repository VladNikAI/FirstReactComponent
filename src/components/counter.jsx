import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  // constructor() {
  //   super();
  //   this.handleClicks = this.handleClicks.bind(this);
  // }

  handleClicks = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // messageAlert() {
  //   let message = "Vados noob Invoker";
  //   if (this.state.count === 10) {
  //     this.messageAlert(message);
  //   }
  // }

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <span style={this.styles} className={classes}>
          {this.state.count}
        </span>
        <button
          onClick={this.handleClicks}
          className="btn btn-secondary btn-sm"
        >
          CLICK
        </button>
        {this.state.count === 5 && <h1>Keep clicking</h1>}
        {this.state.count === 10 && <h1>Don't stop</h1>}
        {this.state.count === 13 && <h1>You're almost there</h1>}
        {this.state.count === 15 && <h1>Vados noob Invoker and Pisun</h1>}
      </div>
    );
  }
}

export default Counter;
