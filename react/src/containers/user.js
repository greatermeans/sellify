import React, { Component } from 'react';
import Listing from './listing'
import getUser from '../actions/getUser'

const User = class extends Component {
	componentDidMount() {
		getUser(55)
	}
	render() {
		return(
			<div>
				<Listing />
			</div>
	)}
}

export default User
