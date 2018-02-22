import React, { Component } from 'react';
import './App.css';
import ToDo from './Components/ToDo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="toDoCntr"> <ToDo/> </div>
      </div>
    );
  }
}

export default App;
