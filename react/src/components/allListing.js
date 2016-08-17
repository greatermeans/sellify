import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListingBox from './listingBox'

class AllListing extends Component {

  displayListings() {
    this.props.all_listings_for_orgs.map ( (listing) => {
    })
  }

  render(){
    return(
      <div>
      Organization Listings
      {/* {this.displayListings()} */}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    listings: state.listings,
    user: state.user
  }
}

const SmartAllListing = connect(mapStateToProps)(AllListing)
export default SmartAllListing
