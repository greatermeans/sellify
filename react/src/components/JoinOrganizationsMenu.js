import React, {Component} from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { browserHistory } from 'react-router'


const JoinOrganizationsMenu = class extends Component {
constructor(props){
  super(props)
  this.state = {selectedOrganizations: [],currentUser:this.props.user.id}
}

  componentDidMount(){
    this.props.fetchOrganizations();
    var orgsAndUser = this.state
    this.props.getUserData(orgsAndUser.currentUser)
    this.state = {selectedOrganizations: this.makeOptions(),currentUser:this.props.user.id}
  }

  makeAllOptions(){
    return this.props.organizations.organizations.map((organization)=>{
			return {value: organization.id, label:organization.name}
		})
  }

  makeOptions(){
    return this.props.user.organizations.map((organization)=>{
      return {value: organization.id, label:organization.name}
    })
  }

  submitHandler(event){
    event.preventDefault()
    var orgsAndUser = this.state
    this.props.joinOrganizations(orgsAndUser)
    this.setState({selectedOrganizations: this.makeOptions()})
    browserHistory.push('/dashboard')
  }

  logChange(val) {
			this.setState({selectedOrganizations: val})
	}

  currentOrgs(){
    if(this.props.user.organizations.length != 0){
      return
        this.props.user.organizations.map((org)=>{return org.name})
    }
  }

  render(){
    const { handleSubmit, handleClick} = this.props;

    return(
      <div>
      <h3>My Organizations:</h3>
      {this.props.user.organizations.map((org)=>{return <li key={org.id}>{org.name}</li>})}
      <form id="join_org" onSubmit={this.submitHandler.bind(this)}>
      <Select multi
      name="form-field-name"
      value={this.state.selectedOrganizations}
      options={this.makeAllOptions()}
      onChange={this.logChange.bind(this)}
      multi={true}
      />
      <button type='submit' className="btn btn-primary btn-outline">Done</button>
      </form>
      </div>
    )
  }


}

export default JoinOrganizationsMenu
