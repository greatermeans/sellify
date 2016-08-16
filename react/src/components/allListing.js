import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListingBox from './listingBox'

class AllListing extends Component {
  render(){
    return(
      <div>
        {this.props.listings.map((listing, idx) => {
          <ListingBox {...listing} key={idx}/>
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    listings: state.listings
  }
}

const SmartAllListing = connect(mapStateToProps)(AllListing)
export default SmartAllListing
