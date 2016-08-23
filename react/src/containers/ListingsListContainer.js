import { connect } from 'react-redux'
import { fetchListings, fetchListingsSuccess, fetchListingsFailure } from '../actions/listings';

import ListingsList from '../components/ListingsList';


const mapStateToProps = (state) => {
  return {
    listingsList: state.listings.listingsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListings: () => {
      dispatch(fetchListings()).then((response) => {
            !response.error ? dispatch(fetchListingsSuccess(response.payload)) : dispatch(fetchListingsFailure(response.payload));
          });
    }
  }
}


const ListingsListContainer = connect(mapStateToProps, mapDispatchToProps)(ListingsList)

export default ListingsListContainer
