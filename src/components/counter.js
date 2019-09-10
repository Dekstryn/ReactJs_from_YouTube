import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  
  render() {
    return (
      <div>
        <p>Count - {this.state.count}</p>
        <button onCLick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
