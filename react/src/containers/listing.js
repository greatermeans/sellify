import React, { Component } from 'react';

const Listing = class extends Component {

	render() {
		return(
		<div>
			hello
		</div>
	)}
}

function mapStateToProps(state){
  return {
    listings: state.listings
  }
}

export default Listing
