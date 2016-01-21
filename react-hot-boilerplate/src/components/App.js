import React, { Component } from 'react';
import store from '../store/counterStore';
import * as actionCreators from '../actions/actionCounter';

export default class App extends Component {

	componentDidMount() {
		console.log("types.increment");
		console.log(actionCreators.increment());
	}

  render() {
  	//this is the increment function
  	let increment = actionCreators.increment();
  	console.log("actionCreators.increment();");
  	console.log(increment);
    return (
      <h1 onClick = () => {
      	store.dispatch({increment})>
      	Space is the place</h1>
    );
  }
}