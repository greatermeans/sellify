import axios from 'axios';

//Listing list
export const FETCH_LISTINGS = 'FETCH_LISTINGS';
export const FETCH_LISTINGS_SUCCESS = 'FETCH_LISTINGS_SUCCESS';
export const FETCH_LISTINGS_FAILURE = 'FETCH_LISTINGS_FAILURE';
export const RESET_LISTINGS = 'RESET_LISTINGS';

//Create new listing
export const CREATE_LISTING = 'CREATE_LISTING';
export const CREATE_LISTING_SUCCESS = 'CREATE_LISTING_SUCCESS';
export const CREATE_LISTING_FAILURE = 'CREATE_LISTING_FAILURE';
export const RESET_NEW_LISTING = 'RESET_NEW_LISTING';

//Validate listing fields like Title, Categries on the server
export const VALIDATE_LISTING_FIELDS = 'VALIDATE_LISTING_FIELDS';
export const VALIDATE_LISTING_FIELDS_SUCCESS = 'VALIDATE_LISTING_FIELDS_SUCCESS';
export const VALIDATE_LISTING_FIELDS_FAILURE = 'VALIDATE_LISTING_FIELDS_FAILURE';
export const RESET_LISTING_FIELDS = 'RESET_LISTING_FIELDS';

//Fetch listing
export const FETCH_LISTING = 'FETCH_LISTING';
export const FETCH_LISTING_SUCCESS = 'FETCH_LISTING_SUCCESS';
export const FETCH_LISTING_FAILURE = 'FETCH_LISTING_FAILURE';
export const RESET_ACTIVE_LISTING = 'RESET_ACTIVE_LISTING';

//Delete listing
export const DELETE_LISTING = 'DELETE_LISTING';
export const DELETE_LISTING_SUCCESS = 'DELETE_LISTING_SUCCESS';
export const DELETE_LISTING_FAILURE = 'DELETE_LISTING_FAILURE';
export const RESET_DELETED_LISTING = 'RESET_DELETED_LISTING';


const ROOT_URL = 'http://localhost:3000/api/v1'

export function fetchListings() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/listings`,
    headers: {Authorization: sessionStorage.jwtToken}
  });

  return {
    type: FETCH_LISTINGS,
    payload: request
  };
}

export function fetchListingsSuccess(listings) {
  return {
    type: FETCH_LISTINGS_SUCCESS,
    payload: listings
  };
}

export function fetchListingsFailure(error) {
  return {
    type: FETCH_LISTINGS_FAILURE,
    payload: error
  };
}

export function validateListingFields(props) {
  //note: we cant have /listings/validateFields because it'll match /listings/:id path!
  const request = axios.post(`${ROOT_URL}/listings/validate/fields`, props);

  return {
    type: VALIDATE_LISTING_FIELDS,
    payload: request
  };
}

export function validateListingFieldsSuccess() {
  return {
    type: VALIDATE_LISTING_FIELDS_SUCCESS
  };
}

export function validateListingFieldsFailure(error) {
  return {
    type: VALIDATE_LISTING_FIELDS_FAILURE,
    payload: error
  };
}

export function resetListingFields() {
  return {
    type: RESET_LISTING_FIELDS
  }
};


export function createListing(props, tokenFromStorage) {
  //const request = axios.listing(`${ROOT_URL}/listings`, props);
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/listings`,
   headers: {'Authorization': `Bearer ${tokenFromStorage}`}
  });

  return {
    type: CREATE_LISTING,
    payload: request
  };
}

export function createListingSuccess(newListing) {
  return {
    type: CREATE_LISTING_SUCCESS,
    payload: newListing
  };
}

export function createListingFailure(error) {
  return {
    type: CREATE_LISTING_FAILURE,
    payload: error
  };
}

export function resetNewListing() {
  return {
    type: RESET_NEW_LISTING
  }
};

export function resetDeletedListing() {
  return {
    type: RESET_DELETED_LISTING
  }
};

export function fetchListing(id) {
  const request = axios.get(`${ROOT_URL}/listings/${id}`);

  return {
    type: FETCH_LISTING,
    payload: request
  };
}


export function fetchListingSuccess(activeListing) {
  return {
    type: FETCH_LISTING_SUCCESS,
    payload: activeListing
  };
}

export function fetchListingFailure(error) {
  return {
    type: FETCH_LISTING_FAILURE,
    payload: error
  };
}

export function resetActiveListing() {
  return {
    type: RESET_ACTIVE_LISTING
  }
};

export function deleteListing(id, tokenFromStorage) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/listings/${id}`,
   headers: {'Authorization': `Bearer ${tokenFromStorage}`}
  });
  return {
    type: DELETE_LISTING,
    payload: request
  };
}

export function deleteListingSuccess(deletedListing) {
  return {
    type: DELETE_LISTING_SUCCESS,
    payload: deletedListing
  };
}

export function deleteListingFailure(response) {
  return {
    type: DELETE_LISTING_FAILURE,
    payload: response
  };
}