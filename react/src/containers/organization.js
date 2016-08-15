import React, { Component } from 'react';

const Organization = class extends Component {
	render() {
		return(
			<select>
				this.state.user.communities.map((community)=>{
					return <option> {community.organization.name} </option>
					})	
			</select>
	)}
}

export default Listing