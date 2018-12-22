import React, { Component } from 'react';
import './App.css';


class Logo extends Component {
  render() {
    return (
      <div >
    	<a className="logo">
			<img src="https://hn.algolia.com/assets/logo-hn-search.png" /> 
		</a> 
      </div>
    );
  }
}

export default Logo;
