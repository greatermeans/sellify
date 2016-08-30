import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ListingsList from '../containers/ListingsListContainer.js';

class ListingsIndex extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="listings_index"/>
        <ListingsListContainer />
      </div>
    );
  }
}


export default ListingsIndex;
