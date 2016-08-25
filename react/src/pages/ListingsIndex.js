import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ValidateEmailAlertContainer from '../containers/ValidateEmailAlertContainer.js';
import ListingsList from '../containers/ListingsListContainer.js';
import Data from '../components/Data'

class ListingsIndex extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="listings_index"/>
        <ValidateEmailAlertContainer/>
        <Data />
        <ListingsList />
      </div>
    );
  }
}


export default ListingsIndex;
