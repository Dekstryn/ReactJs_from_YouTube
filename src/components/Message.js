import React, {Component} from 'react'

class Message extends Component{
  constructor(){
    super()
    this.state = {
      message: "Welcome VIsitor"
    }
  }

  changeMessage(){
    this.setState({
      message: "Thank You"
    })
  }
  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscrible</button>
      </div> 
    )
  }
}
export default Message 