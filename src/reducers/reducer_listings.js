import {
	FETCH_ALL_LISTINGS, FETCH_ALL_LISTINGS_SUCCESS, FETCH_ALL_LISTINGS_FAILURE, RESET_ALL_LISTINGS,
	FETCH_LISTINGS, FETCH_LISTINGS_SUCCESS, FETCH_LISTINGS_FAILURE, RESET_LISTINGS,
	FETCH_LISTING, FETCH_LISTING_SUCCESS,  FETCH_LISTING_FAILURE, RESET_ACTIVE_LISTING,
	CREATE_LISTING, CREATE_LISTING_SUCCESS, CREATE_LISTING_FAILURE, RESET_NEW_LISTING,
	DELETE_LISTING, DELETE_LISTING_SUCCESS, DELETE_LISTING_FAILURE, RESET_DELETED_LISTING,
  RESET_LISTING_FIELDS,
	SEARCH, SEARCH_TERM, RESET_SEARCH_TERM
} from '../actions/listings';


	const INITIAL_STATE = { listingsList: {listings: [], error:null, loading: false},
													allListings: {listings: [], error:null, loading: false},
													newListing: {listing:null, error: null, loading: false},
													activeListing: {listing:null, error:null, loading: false},
													deletedListing: {listing: null, error:null, loading: false},
													searchResults: {listings: []},
													searchTerm: ''
												};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

	case FETCH_LISTINGS:
  	return { ...state, listingsList: {listings:[], error: null, loading: true} };
  case FETCH_LISTINGS_SUCCESS:
    return { ...state, listingsList: {listings: action.payload.data, error:null, loading: false} };
  case FETCH_LISTINGS_FAILURE:
    error = action.payload.data || {message: action.payload.message};
    return { ...state, listingsList: {listings: [], error: error, loading: false} };
  case RESET_LISTINGS:
    return { ...state, listingsList: {listings: [], error:null, loading: false} };

	case FETCH_ALL_LISTINGS: 
		return {...state, allListings: {listings: [], error:null, loading: false} };
	case FETCH_ALL_LISTINGS_SUCCESS:
    return { ...state, allListings: {listings: action.payload.data, error:null, loading: false} };
  case FETCH_ALL_LISTINGS_FAILURE:
    error = action.payload.data || {message: action.payload.message};
	  return { ...state, allListings: {listings: [], error: error, loading: false} };
	case RESET_ALL_LISTINGS:
    return { ...state, allListings: {listings: [], error:null, loading: false} };

  case FETCH_LISTING:
    return { ...state, activeListing:{...state.activeListing, loading: true}};
  case FETCH_LISTING_SUCCESS:
    return { ...state, activeListing: {listing: action.payload.data, error:null, loading: false}};
  case FETCH_LISTING_FAILURE:
    error = action.payload.data || {message: action.payload.message};
    return { ...state, activeListing: {listing: null, error:error, loading:false}};
  case RESET_ACTIVE_LISTING:
    return { ...state, activeListing: {listing: null, error:null, loading: false}};

  case CREATE_LISTING:
  	return {...state, newListing: {...state.newListing, loading: true}}
  case CREATE_LISTING_SUCCESS:
  	return {...state, newListing: {listing:action.payload.data, error:null, loading: false}}
  case CREATE_LISTING_FAILURE:
    error = action.payload.data || {message: action.payload.message};
  	return {...state, newListing: {listing:null, error:error, loading: false}}
  case RESET_NEW_LISTING:
  	return {...state,  newListing:{listing:null, error:null, loading: false}}


  case DELETE_LISTING:
   	return {...state, deletedListing: {...state.deletedListing, loading: true}}
  case DELETE_LISTING_SUCCESS:
  	return {...state, deletedListing: {listing:action.payload.data, error:null, loading: false}}
  case DELETE_LISTING_FAILURE:
    error = action.payload.data || {message: action.payload.message};
  	return {...state, deletedListing: {listing:null, error:error, loading: false}}
  case RESET_DELETED_LISTING:
  	return {...state,  deletedListing:{listing:null, error:null, loading: false}}

  case RESET_LISTING_FIELDS:
    return {...state, newListing:{...state.newListing, error: null, loading: null}}

	case SEARCH:
	  return { ...state, searchResults: {listings: action.payload}};
	case SEARCH_TERM:
		return { ...state, searchTerm: action.payload};
	case RESET_SEARCH_TERM:
		return { ...state, searchTerm: '', searchResults: {listings: []} };

  default:
    return state;
  }
}
