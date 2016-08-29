import { connect } from 'react-redux'
import { fetchListings, fetchListingsSuccess, fetchListingsFailure } from '../actions/listings';
import { bindActionCreators } from 'redux'
import { getUserData } from '../actions/users'
import ListingsList from '../components/ListingsList';


const mapStateToProps = (state) => {
  return {
    listingsList: state.listings.listingsList,
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: bindActionCreators(getUserData, dispatch),
    fetchListings: () => {
      dispatch(fetchListings()).then((response) => {
            !response.error ? dispatch(fetchListingsSuccess(response.payload)) : dispatch(fetchListingsFailure(response.payload));
          });
    }
  }
}

const ListingsListContainer = connect(mapStateToProps, mapDispatchToProps)(ListingsList)

export default ListingsListContainer
