import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListingBox from './listingBox'

class DashboardListing extends Component {

  displayListings() {
    return this.props.user.dashboard_listings.map ( (listing, idx) => {
      return <ListingBox key={idx} {...listing}/>
    })
  }

  render(){
    return(
      <div>
      <h2 className="fh5co-heading animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">Here are the listings from your organizations</h2>
      <div className='row animate-box fadeInLeft animated' data-animate-effect='fadeInLeft'>

      {this.displayListings()}
      </div>
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
