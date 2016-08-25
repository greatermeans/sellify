import React, { Component } from 'react';
import AllListingsContainer from '../containers/AllListingsContainer'
import HeaderContainer from '../containers/HeaderContainer.js';

const AllListings = class extends Component {

  render() {
    return (
      <div id="fh5co-page">
        <HeaderContainer type="all_listings"/>
        <div id="fh5co-main">
        <div className='fh5co-narrow-content  animate-box fadeInLeft animated'>
          <AllListingsContainer />
        </div>
        </div>
      </div>
    )
  }
}

export default AllListings
