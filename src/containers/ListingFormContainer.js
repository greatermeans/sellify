import ListingsForm from '../components/ListingsForm.js';
import { createListing, createListingSuccess, createListingFailure, resetNewListing} from '../actions/listings';
import {reduxForm} from 'redux-form';
import { browserHistory } from 'react-router'

var listingData;

function onDrop(file) {
  listingData = new FormData()
  listingData.append('image', file[0])
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.trim() === '') {
    errors.title = 'Enter a Title';
  }
  if (!values.tags || values.tags.trim() === '') {
    errors.tags = 'Choose tags';
  }
  if (!values.description || values.description.trim() === '') {
    errors.description = 'Describe your item';
  }
  if (!values.price || values.price.trim() === '') {
    errors.price = 'Enter a Price';
  }
  if (!values.zipcode || values.zipcode.trim() === '' || values.zipcode.length !== 5) {
    errors.zipcode = 'Invalid Zip Code';
  }
  return errors;
}

const validateAndCreateListing = (values, dispatch) => {

  return new Promise((resolve, reject) => {
    let token = sessionStorage.getItem('jwtToken');
    if (!token || token === '') { 
      let data = {data: {message: 'Please Sign In'}};
      dispatch(createListingFailure(data)); 
      reject(data); 
      return;
    }
    values = JSON.stringify(values)
    listingData.append("listing", values)
    dispatch(createListing(listingData, token))
      .then((response) => {
        let data = response.payload.data;
        if (response.payload.status != 200) {
          dispatch(createListingFailure(response.payload));
          reject(data)
        } else {
          dispatch(createListingSuccess(response.payload));
          browserHistory.push(`/listings/${response.payload.data.id}`);
          resolve(); 
        }
      })
   })
};

const mapDispatchToProps = (dispatch) => {
  return {
    createListing: validateAndCreateListing,
    onDrop: onDrop,
    resetMe: () => {
      dispatch(resetNewListing());
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    newListing: state.listings.newListing,
    user: state.user
  };
}

export default reduxForm({
  form: 'ListingsNewForm',
  fields: ['title', 'description', 'price', 'zipcode','tags'],
  validate
}, mapStateToProps, mapDispatchToProps)(ListingsForm);
