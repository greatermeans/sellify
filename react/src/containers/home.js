import React, { Component } from 'react';
<<<<<<< HEAD
import NavBar from  '../components/navBar'
import NewListingForm from '../components/newListingForm'
=======
import CreateListing from '../components/createListing'
>>>>>>> 7766005c1e1e1fb8378293995b4ae02bdd35334d
import BookMarked from '../components/bookmarked'
import AllListing from '../components/allListing'
import getUser from '../actions/getUser'

const Home = class extends Component {

	render() {
		return(
			<div>
<<<<<<< HEAD
				<NavBar />
				<NewListingForm />
=======

				<CreateListing />
>>>>>>> 7766005c1e1e1fb8378293995b4ae02bdd35334d
			  <AllListing />
				<BookMarked />
			</div>
	)}
}

export default Home
