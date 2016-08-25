import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ListingDetails extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listingId);
  }


  render() {
    const { listing, loading, error } = this.props.activeListing;
    if (loading) {
      return <div className="container">Loading...</div>;
    } else if(error) {
      return  <div className="alert alert-danger">{error.message}</div>
    } else if(!listing) {
      return (
        <span />
      )
    }
    debugger
    return (
      <div className="container">
      <h3><a onClick={this.props.onDeleteClick}>Delete Listing</a></h3>

        <h3>{listing.title}</h3>
        <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <img src={listing.image} alt={listing.name} />
        </div>
        </div>
        </div>
        <h6> Categories: {listing.tags.map((tag)=>{return `${tag.name}, `})}</h6>
        <br/>
        <p>{listing.description}</p>
      </div>
    );
  }
}

export default ListingDetails;
