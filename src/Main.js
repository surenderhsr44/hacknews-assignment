import React, { Component } from 'react';
import './App.css';

class Main extends Component {
  render() {
    return (
		<div className="mainbody">Search
			<select className="selector">
			  <option value="volvo">All</option>
			  <option value="saab">Stories</option>
			  <option value="fiat">Comments</option>
			  <option value="audi">Audi</option>
			</select> by
			<select className="selector" >
			  <option value="popularity">Popularity</option>
			  <option value="date">Date</option>
			</select> for
			<select className="selector">
			  <option value="alltime">All Time</option>
			  <option value="last34h">Last 24h</option>
			  <option value="pasrweek">Past Week</option>
			  <option value="pastmonth">Past Month</option>
			  <option value="pastyear">Past Year</option>
			</select>
		</div>
    );
  }
}

export default Main;

