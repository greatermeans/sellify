import React, { Component } from 'react';
import fetchUsers from '../actions/fetchUsers'


const Listing = class extends Component {

	doSomething() {
		let tomato = fetchUsers()
		debugger
	}


	render() {
		return(
		<div onClick={this.doSomething.bind(this)}>
			hello
		</div>
	)}
}

export default Listing