import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Columns from './components/Columns';

class App extends Component {
  state = {
    total: 0,
    rOneTotal: 0,
    rTwoTotal: 0
  };

  render() {
    const roundOneValues = [200, 400, 600, 800, 1000];
    const roundTwoValues = [400, 800, 1200, 1600, 2000];
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          component={() => <Columns values={roundOneValues} />}
        />
        <Route
          path="/double-jeopardy"
          component={() => <Columns values={roundTwoValues} />}
        />
        <Route path="/final-jeopardy" component={Columns} />
      </div>
    );
  }
}

export default App;
