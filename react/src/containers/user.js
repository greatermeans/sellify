import React, { Component } from 'react';
import Listing from './listing'
import getUser from '../actions/getUser'

const User = class extends Component {
	componentDidMount() {
		debugger
		getUser(188)
	}
	render() {
		return(
			<div>
				<Listing />
			</div>
	)}
}

export default User