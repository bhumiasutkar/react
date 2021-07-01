import React, { Component } from 'react';

class ClassCount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment = () => {
      this.setState(prev=>{return { count: this.state.count + 1}})
    }
    decrement = () => {
        this.setState(prev => { return {count: this.state.count - 1}})
    }
    reset = () => {
        this.setState(prev=>{return {count: 0}})
    }

    render () {
        return (
            <div style={{display:'block', padding:'20px', background:'#ecd6dd', margin:'20px auto', 'textAlign': 'center'}}>
                <h3>Class component counter</h3>
                <p>Count is: {this.state.count}</p>
                <button onClick={this.increment}>Add</button>
                <button onClick={this.decrement}>minus</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
};

export default ClassCount;