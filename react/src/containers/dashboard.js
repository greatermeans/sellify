import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import NewListingForm from '../components/newListingForm'
import BookMarked from '../components/bookmarked'
import SmartDashboardListing from '../components/dashboardListing'
import auth from './authenticationResource'

const Dashboard = class extends Component {

	checkUserOrgs() {
		if (this.props.user.organizations.length === 0) {
			return(
				<div>
					<h4> To add listings, you must first belong to at least 1 organization. </h4>
					<h5> <Link to='/organizations'>Click here to add organizations</Link> </h5>
				</div>
			)
		} else {
			return <NewListingForm />
		}
	}

	render() {
		return(
			<div>
				{this.checkUserOrgs()}
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
