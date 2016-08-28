import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ListingFormContainer from '../containers/ListingFormContainer.js';

class ListingsNew extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="listings_new"/>
        <ListingFormContainer />
      </div>
    );
  }
}


export default ListingsNew;
