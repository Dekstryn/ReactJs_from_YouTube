import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: "Parent"
    }
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(childHello){
    alert(`'Hello' ${this.state.parentName} from ${childHello}`)
  }

  render() {
    return (
      <div>
        <ChildComponents greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
