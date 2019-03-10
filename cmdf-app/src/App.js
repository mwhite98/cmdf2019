import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBar position="static" color="default">
      <Toolbar>
          <Typography variant="h6" color="inherit">
            SEX BOT
          </Typography>
        </Toolbar>
        </AppBar>
        <header className="App-header">
        <h1> NEW APP </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
