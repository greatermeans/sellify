import ListingDetails from '../components/ListingDetails.js';
import { fetchListing, fetchListingSuccess, fetchListingFailure, resetActiveListing, resetDeletedListing } from '../actions/listings';
import { connect } from 'react-redux';



function mapStateToProps(globalState, ownProps) {
  return { activeListing: globalState.listings.activeListing, listingId: ownProps.id };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	 fetchListing: (id) => {
    	dispatch(fetchListing(id))
      	.then((data) => 
          {
          	!data.error ? dispatch(fetchListingSuccess(data.payload)) : dispatch(fetchListingFailure(data.payload));
          }) 
  	 },
     resetMe: () =>{
      //clean up both activeListing(currrently open) and deletedListing(open and being deleted) states
        dispatch(resetActiveListing());
        dispatch(resetDeletedListing());
     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListingDetails);
