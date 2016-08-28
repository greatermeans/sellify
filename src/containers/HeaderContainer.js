import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { fetchListings, resetDeletedListing, deleteListing, deleteListingSuccess, deleteListingFailure } from '../actions/listings';
import { logoutUser } from '../actions/users';
import Header from '../components/Header.js';



function mapStateToProps(state) {
  return {
    deletedListing: state.listings.deletedListing,
    authenticatedUser: state.user.status === 'authenticated' ? state.user.user : null,
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	 onDeleteClick: () => {
      let token = sessionStorage.getItem('jwtToken');
      if (!token || token === '') {
          let data = {data: {message: 'Please Sign In'}}
          dispatch(deleteListingFailure(data));
          return;
      }
    	dispatch(deleteListing(ownProps.listingId, token))
      	.then((response) => {
            !response.error ? dispatch(deleteListingSuccess(response.payload)) : dispatch(deleteListingFailure(response.payload));
          });
  	 },
     resetMe: () =>{
        dispatch(resetDeletedListing());
     },
     logout: () => {
         sessionStorage.removeItem('jwtToken');
         dispatch(logoutUser())
     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
