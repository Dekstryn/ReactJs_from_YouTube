import React, { Component } from 'react'

class EventBind extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
     message: "Hello" 
    }
  }
  
  render() {
    return (
      <div>
        <button>Click</button>
      </div>
    )
  }
}

export default EventBind
