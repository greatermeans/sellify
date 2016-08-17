import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewListingForm from '../components/newListingForm'
import BookMarked from '../components/bookmarked'
import SmartDashboardListing from '../components/dashboardListing'
import auth from './authenticationResource'

const Dashboard = class extends Component {
	render() {
		return(
			<div>
				<NewListingForm />
			  <SmartDashboardListing />
				<BookMarked />
			</div>
	)}
}

function mapStateToProps(state) {
	return { user: state.user, authenticated: state.authenticated }
}

const SmartDashboard = connect(mapStateToProps)(Dashboard)

const AuthDashboard = auth(SmartDashboard)
export default AuthDashboard;
