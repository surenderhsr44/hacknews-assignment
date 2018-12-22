import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="page-header">
            <Header />
          </div>
        </header>
        <Main />
        <Login />
      </div>
    );
  }
}

export default App;
