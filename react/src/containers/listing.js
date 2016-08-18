import React, { Component } from 'react';
import {connect} from 'react-redux'
import auth from '../containers/authenticationResource'

const Listing = class extends Component {

	render() {
		return(
		<div className="listing-container">
			<h2>{this.props.listing.listing.title}</h2>
			<img src={this.props.listing.listing.image}/>
			<p>{this.props.listing.listing.price}</p>
			<br/>
			<p>{this.props.listing.listing.description}</p>
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
