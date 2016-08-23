import React, { Component } from 'react';
import { Link } from 'react-router';

class ListingsList extends Component {
  componentWillMount() {
    this.props.fetchListings();
  }

  renderTags(tags) {
     return tags.map((t,idx) => {
        return (
          <Link to={"filter/" + t.name.split(',')[0]} key={idx} className="list-group-item-text">{" " + t.name + " "}</Link>
        );
     });
  }

  renderListings(listings) {
    return listings.map((listing) => {
      return (
        <li className="list-group-item" key={listing.id}>
          <Link style={{color:'black'}} to={"listings/" + listing.id}>
            <img src={listing.image} alt={listing.name} />
            <h3 className="list-group-item-heading">{listing.title}</h3>
            <h4 className="list-group-item-heading">{listing.description}</h4>
          </Link>
            {this.renderTags(listing.tags)}
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
      <div className="container">
        <h1>Recent Listings in Your Organizations</h1>
        <ul className="list-group">
          {this.renderListings(listings)}
        </ul>
      </div>
    );
  }
}


export default ListingsList;
