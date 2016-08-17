import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewListingForm from '../components/newListingForm'
import BookMarked from '../components/bookmarked'
import SmartAllListing from '../components/allListing'
import auth from './authenticationResource'

const Home = class extends Component {
	render() {
		return(
			<div>
				<NewListingForm />
			  SmartAllListing here
				<BookMarked />
			</div>
	)}
}

function mapStateToProps(state) {
	return { user: state.user, authenticated: state.authenticated }
}

const SmartHome = connect(mapStateToProps)(Home)

const AuthHome = auth(SmartHome)
export default AuthHome;
