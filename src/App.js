import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Message from './components/Message'
import Counter from './components/counter'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Counter />
        {/*<Greet name="Bruce"/>
        <Welcome name="Bruce"/>
        <Message />*/}
      </div>
    );
  }
}

export default App;
