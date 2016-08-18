import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import OrganizationBox from '../components/organizationBox'
import { connect } from 'react-redux'
import joinOrganizations from '../actions/joinOrganizations'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form';


const relatedGroups = [{name:""}]

const AllOrganizations = class extends Component {
	constructor(props){
		super(props)
		this.state = {selectedOrganizations: [], cleanOrgs:[], currentUser:this.props.user}
	}

	submitHandler(){
		this.props.joinOrganizations(this.state)
	}

	logChange(val) {
			let cleanOrgs = val.map((org)=>{return org.obj})
			this.setState({selectedOrganizations: val, cleanOrgs: cleanOrgs})
	}

	handleClick(orgsData){
		debugger
		relatedOrgs.push(parseInt(orgsData.target.getAttribute('value')))
	}

	render() {

		const {fields: {orgs}, handleSubmit, handleClick} = this.props;

		var options = this.props.orgs.map((org)=>{
			return {value: org.id, label: org.name, obj:org}
		})
		return(
			<form id="join_org" onSubmit={handleSubmit(this.submitHandler.bind(this))}>
				<label>Choose your organizations</label><br />
					<Select multi
				    name="form-field-name"
				    value={this.state.selectedOrganizations}
				    options={options}
				    onChange={this.logChange.bind(this)}
						multi={true}
					/>
				<button type='submit'>Done</button>
			</form>
		)}
}

function mapStateToProps(state){
  return {
    orgs: state.orgs,
		user: state.user
  }
}

export default reduxForm({
 form: 'AllOrganizations',
 fields: ['orgs']
}, mapStateToProps,{joinOrganizations})(AllOrganizations);
