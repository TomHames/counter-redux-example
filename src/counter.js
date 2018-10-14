import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <button onClick={this.decrement}> - </button>
        <span>{this.props.count}</span>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
