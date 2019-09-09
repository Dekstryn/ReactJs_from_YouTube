import React, {Component} from 'react'

class Message extends Component{
  constructor(){
    super()
    this.state = {
      message: "Welcome VIsitor"
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.change.Message()}>Subscrible</button>
      </div> 
    )
  }
}
export default Message 