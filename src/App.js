import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Columns from './components/Columns';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Columns />
      </div>
    );
  }
}

export default App;
