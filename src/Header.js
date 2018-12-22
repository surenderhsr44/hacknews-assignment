import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Searchbar from './Searchbar';

class Header extends Component {
  render() {
    return (
      <div>
      	<Logo />
      	<Searchbar />    
      </div>
    );
  }
}

export default Header;
