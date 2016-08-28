import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AllListings from '../components/AllListings';
import { fetchAllListings, fetchAllListingsSuccess, fetchAllListingsFailure, resetSearchTerm } from '../actions/listings';


const mapStateToProps = (state) => {
  return {
    user: state.user,
    searchResults: state.listings.searchResults,
    searchTerm: state.listings.searchTerm,
    allListings: state.listings.allListings
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      resetSearchTerm: bindActionCreators(resetSearchTerm, dispatch),

      fetchAllListings: () => {
        dispatch(fetchAllListings()).then((response) => {
              !response.error ? dispatch(fetchAllListingsSuccess(response.payload)) : dispatch(fetchAllListingsFailure(response.payload));
            });
      }
    }
}

const AllListingsContainer = connect(mapStateToProps, mapDispatchToProps)(AllListings)

export default AllListingsContainer
