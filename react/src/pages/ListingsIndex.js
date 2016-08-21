import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ValidateEmailAlertContainer from '../containers/ValidateEmailAlertContainer.js';
import ListingsList from '../containers/ListingsListContainer.js';

class ListingsIndex extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="listings_index"/>
        <ValidateEmailAlertContainer/>
        <ListingsList />
      </div>
    );
  }
}


export default ListingsIndex;
