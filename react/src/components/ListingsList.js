import React, { Component } from 'react';
import { Link } from 'react-router';
import ListingsBox from './ListingsBox'


class ListingsList extends Component {
  componentWillMount() {
    this.props.fetchListings();
  }

  renderListings(listings) {
    return listings.map((listing) => {
      return (
        <li className="list-group-item" key={listing.id}>
          <ListingsBox {...listing} />
        </li>
      );
    });
  }

  render() {
    const { listings, loading, error } = this.props.listingsList;

    if(loading) {
      return <div className="container"><h1>Listings</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className='fh5co-narrow-content  animate-box fadeInLeft animated'>
      <div className="container" >
        <h3><Link to={'/listings/new'}>+ Create New Listing</Link></h3>
        <h1>Recent Listings in Your Organizations</h1>
        <ul className="list-group">
          {this.renderListings(listings)}
        </ul>
      </div>
      </div>
    );
  }
}


export default ListingsList;
