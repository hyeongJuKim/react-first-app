import React, { Component } from 'react';

class Counter extends Component {
  // state 핸들러 example

  state = {
    number:0
  }

  plus = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  minus = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render(){
    return(
    <>
      <h1>카운터</h1>
      <div>value: {this.state.number}
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    </>
    );
  }
}

export default Counter;