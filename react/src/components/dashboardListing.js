import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListingBox from './listingBox'

class DashboardListing extends Component {

  displayListings() {
    debugger
    return this.props.user.dashboard_listings.map ( (listing, idx) => {
      return <ListingBox key={idx} {...listing}/>
    })
  }

  render(){
    return(
      <div>
      <h1>Organizations Listings</h1>
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

const SmartDashboardListing = connect(mapStateToProps)(DashboardListing)
export default SmartDashboardListing
