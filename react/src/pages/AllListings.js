import React, { Component } from 'react';
import AllListingsContainer from '../containers/AllListingsContainer'
import HeaderContainer from '../containers/HeaderContainer.js';

const AllListings = class extends Component {

  render() {
    return (
      <div>
      <HeaderContainer type="all_listings"/>
        <AllListingsContainer />
      </div>
    )
  }
}

export default AllListings
