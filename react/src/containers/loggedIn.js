import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from  '../components/navBar'
import auth from './authenticationResource'

const LoggedIn = class extends Component {
	render() {
		return(
			<div id="fh5co-main" className="fh5co-narrow-content">
				<NavBar />
				{this.props.children}
			</div>
	)}
}

function mapStateToProps(state) {
	return { user: state.user, authenticated: state.authenticated }
}

const SmartLoggedIn = connect(mapStateToProps)(LoggedIn)

const AuthLoggedIn = auth(SmartLoggedIn)
export default AuthLoggedIn;
