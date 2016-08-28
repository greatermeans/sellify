import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteListing } from '../actions/listings';
import Header from '../containers/HeaderContainer.js';
import ListingDetailsContainer from '../containers/ListingDetailsContainer.js';

class ListingsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deleteListing(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
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
