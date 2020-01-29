import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3
            target="_blank"
            rel="noopener noreferrer"
          >
            BLOGGIN
          </h3>
          
        </header>
        <Router>
          {/* <NavBar /> */}
        </Router>
      </div>
    );
  }
}

export default App;
