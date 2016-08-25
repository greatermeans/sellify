import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import searchListings from '../actions/searchListings';
import SearchBar from '../components/AllListings';
import { fetchAllListings, fetchAllListingsSuccess, fetchAllListingsFailure } from '../actions/listings';


const mapStateToProps = (state) => {
  return {
    user: state.user,
    search: state.search,
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchListings: bindActionCreators(searchListings: searchListings, dispatch)
    }
}

const AllListingsContainer = connect(mapStateToProps, mapDispatchToProps)(AllListings)

export default AllListingsContainer
