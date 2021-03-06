import React, { Component } from 'react';

class ListingDetails extends Component {

  componentWillUnmount() {
     this.props.resetMe();
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listingId);
  }

  callDeleteMethod(){
    this.props.DeleteClick(this.props)
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
    return (
      <div className="container">
      <h3><a onClick={this.callDeleteMethod.bind(this)}>Delete Listing</a></h3>

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
