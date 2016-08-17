import React, { Component } from 'react';
import OrganizationBox from '../components/organizationBox'
import { connect } from 'react-redux'

const AllOrganizations = class extends Component {

	componentWillMount(){
		
	}

	render() {
		return(
			<div>
			<OrganizationBox />
			</div>
	)}
}


function mapStateToProps(state) {

	return { user: state.user}
}

const SmartAllOrganizations = connect(mapStateToProps)(AllOrganizations)



export default SmartAllOrganizations
