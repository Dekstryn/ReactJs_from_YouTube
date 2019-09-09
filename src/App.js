import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet name="Bruce"/>
        <Greet name="Clark"/>
        <Greet name="Diana"/>
        <Welcome name="Bruce"/>
      </div>
    );
  }
}

export default App;
