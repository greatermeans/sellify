import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import joinOrganizations from '../actions/joinOrganizations'
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router'

const AllOrganizations = class extends Component {
	constructor(props){
		super(props)
		this.state = {selectedOrganizations: this.makeOptions(), currentUser:this.props.user}
	}


	makeOptions(){
		return this.props.user.organizations.map((org)=>{
			return {value: org.id, label:org.name}
		})
	}

	submitHandler(){
		this.props.joinOrganizations(this.state)
		browserHistory.push('/dashboard')
	}


	logChange(val) {
			this.setState({selectedOrganizations: val})
	}


	render() {

		const {fields: {orgs}, handleSubmit} = this.props;
		var options = this.props.orgs.map((org)=>{
			return {value: org.id, label: org.name}
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
				<button type='submit' className="btn btn-primary btn-outline">Done</button>
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
