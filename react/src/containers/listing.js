import React, { Component } from 'react';
import {connect} from 'react-redux'
import auth from '../containers/authenticationResource'

const Listing = class extends Component {
	render() {
		return(
		<div >
			<h2>{this.props.listing.title}</h2>
			<p>${this.props.listing.price}</p>
			<img src={this.props.listing.image}></img>
			<br/>
			<p>{this.props.listing.description}</p>
		</div>
	)}
}

function mapStateToProps(state){
  return {
    listing: state.listing
  }
}

const SmartListing = connect(mapStateToProps)(Listing)

const AuthListing = auth(SmartListing)
export default AuthListing;
