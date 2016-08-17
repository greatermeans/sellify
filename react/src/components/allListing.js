import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListingBox from './listingBox'

class AllListing extends Component {

  displayListings() {
    return this.props.user.dashboard_listings.map ( (listing, idx) => {
      return <ListingBox key={idx} {...listing}/>
    })
  }

  render(){
    return(
      <div>
      Organization Listings
      {this.displayListings()}
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
