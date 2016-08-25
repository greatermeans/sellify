import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchListings, searchTerm } from '../actions/listings';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => {
  debugger
  return {
    user: state.user,
    search: state.search,
    searchTerm: state.searchTerm
  };
}

const mapDispatchToProps = (dispatch) => {
    return action: {
      searchListings: bindActionCreators(searchListings, dispatch),
      searchTerm: bindActionCreators(searchTerm, dispatch)
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar)

export default SearchContainer
