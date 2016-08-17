import React, { Component } from 'react';
import { connect } from 'react-redux'

const ListingDetail = class extends Component {
  render(){
    return(
      <div>
        {this.props.user.user.listings.map((listing, ind)=>{
          return <ListingBox key={ind} title={listing.title} price={listing.price} image={listing.image} description={listing.description}/>
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {

	return { user: state.user, authenticated: state.authenticated }
}

const SmartListingDetail = connect(mapStateToProps)(ListingDetail)
