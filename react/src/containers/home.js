import React, { Component } from 'react';
import CreateListing from '../components/createListing'
import BookMarked from '../components/bookmarked'
import AllListing from '../components/allListing'
import getUser from '../actions/getUser'

const Home = class extends Component {
	render() {
		return(
			<div>

				<CreateListing />
			  <AllListing />
				<BookMarked />
			</div>
	)}
}

export default Home
