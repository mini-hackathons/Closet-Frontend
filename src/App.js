import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchPage from './pages/SearchPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchPage></SearchPage>
      </div>
    );
  }
}

export default App;
