import React, { Component } from 'react';
import { deleteListing } from '../actions/listings';
import { browserHistory } from 'react-router'
import Header from '../containers/HeaderContainer.js';
import ListingDetailsContainer from '../containers/ListingDetailsContainer.js';

class ListingsShow extends Component {

  onDeleteClick() {
    this.props.deleteListing(this.props.params.id)
      .then(() => { browserHistory.push('/profile'); });
  }

  render() {
    return (
      <div className='container'>
        <Header type="listings_show" listingId={this.props.params.id}/>
        <ListingDetailsContainer id={this.props.params.id}/>
      </div>
    );
  }
}

export default ListingsShow;
