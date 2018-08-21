import React, { Component } from 'react';
import './App.css';
import ToDo from './component/ToDo/ToDo';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ToDo App In React</h1>
        </header>
        <br/>
        
        <ToDo />
      </div>
    );
  }
}

export default App;

