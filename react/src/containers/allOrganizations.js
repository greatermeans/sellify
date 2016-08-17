import React, { Component } from 'react';
import OrganizationBox from '../components/organizationBox'
import { connect } from 'react-redux'
import getOrganizations from '../actions/getOrganizations'
import { bindActionCreators } from 'redux'

const AllOrganizations = class extends Component {
	mapOrgs(){
		return (
			this.props.orgs.map((org)=>{
				return (<li> {org.name} </li>)
			})
	)
}

	render() {

		return(
			<div>
			Select your organizations
			<ul>
			{this.mapOrgs()}
			</ul>
			</div>
	)}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getOrganizations: getOrganizations},dispatch)
}

function mapStateToProps(state){
  return {
    orgs: state.orgs
  }
}

const SmartAllOrganizations = connect(mapStateToProps, mapDispatchToProps)(AllOrganizations)

export default SmartAllOrganizations
