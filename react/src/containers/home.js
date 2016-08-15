import React, { Component } from 'react';
import NavBar from  './components/navBar'
import CreateListing from './components/createListing'
import BookMarked from './components/bookmarked'
import AllListing from './components/allListing'
import getUser from '../actions/getUser'

const Home = class extends Component {
	render() {
		return(
			<div>
				<NavBar />
				<CreateListing />
			  <AllListing />
				<BookMarked />
			</div>
	)}
}

export default Home
