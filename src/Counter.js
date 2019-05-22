import React, { Component } from 'react';

class Counter extends Component {

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
        <div>
        <h1>카운터</h1>
        <div>value: {this.state.number}</div>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        </div>
        );
    }
}

export default Counter;