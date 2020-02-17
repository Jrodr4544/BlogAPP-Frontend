import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import NavBar from './components/Navbar';
import About from './components/About';

import NewPostContainer from './containers/newPostContainer'
import PostsContainer from './containers/postsContainer'

class App extends Component {
  render() {
    return (
      // <div className="App">
      <div>  
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
          <div>
            <NavBar />
            <Route path='/posts' component={PostsContainer} />
            <Route path='/about' component={About} />
            <Route path='/new_post' component={NewPostContainer} />
            <Route exact path="/" render={() => (
              <div className="App"><h1>Welcome</h1><img className="App-logo" src={logo} alt='171x180' /></div>
            )} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
