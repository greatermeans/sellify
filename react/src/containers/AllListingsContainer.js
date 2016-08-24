import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import searchListings from '../actions/searchListings';
import AllListings from '../components/AllListings';
import { fetchAllListings, fetchAllListingsSuccess, fetchAllListingsFailure } from '../actions/listings';


const mapStateToProps = (state) => {
  return {
    user: state.user,
    search: state.search,
    allListings: state.listings.allListings
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      action: {
        searchListings: bindActionCreators(searchListings, dispatch)
      },
      fetchAllListings: () => {
        dispatch(fetchAllListings()).then((response) => {
              !response.error ? dispatch(fetchAllListingsSuccess(response.payload)) : dispatch(fetchAllListingsFailure(response.payload));
            });
      }
    }
}

const AllListingsContainer = connect(mapStateToProps, mapDispatchToProps)(AllListings)

export default AllListingsContainer
