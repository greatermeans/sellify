import React, { Component } from 'react';
import OrganizationBox from '../components/organizationBox'
import { connect } from 'react-redux'
import joinOrganizations from '../actions/joinOrganizations'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form';

const relatedOrgs = []
const AllOrganizations = class extends Component {

	submitHandler(){
		this.props.joinOrganizations(relatedOrgs)
	}

	handleClick(orgsData){
		debugger
		relatedOrgs.push(parseInt(orgsData.target.getAttribute('value')))
	}

	render() {

		const {fields: {orgs}, handleSubmit, handleClick} = this.props;
		return(
			<form id="join_org" onSubmit={handleSubmit(this.submitHandler.bind(this))}>
				<label>Choose your organizations</label>
					<div {...orgs}>
						{this.props.orgs.map((org,ind) =>
							<button value={org.id} onClick={this.handleClick.bind(this)}>
							{org.name}
							</button>
					)}
					</div>
				<button type='submit'>Done</button>
			</form>
		)}
}

function mapStateToProps(state){
  return {
    orgs: state.orgs
  }
}

export default reduxForm({
 form: 'AllOrganizations',
 fields: ['orgs']
}, mapStateToProps,{joinOrganizations})(AllOrganizations);
