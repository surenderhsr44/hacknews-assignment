import React, { Component } from 'react';
import './App.css';
import Suggestions from './Suggestions';
  

class Searchbar extends Component {
  state = { query: '',results: []}
   handleChange = (e) => {
     this.setState({ searchString:e.target.value });
   }
   componentDidMount(){
    fetch('https://hn.algolia.com/api')
    .then(response => response.json())
    .then(data => {this.setState({results: data})})
   }
     handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
         
        }
      } else if (!this.state.query) {
      }
    })
  }
   render() {
   return (
    <div className="">
     <form className="searchbar">
       <input className="inputsearch" 
         placeholder="      Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
       />
        <Suggestions results={this.state.results} />
       <button className="searchbutton"><i className="fa fa-search"></i></button>
       <p>{this.state.query}</p>
     </form>
    </div>
   )
 }


}

export default Searchbar;
