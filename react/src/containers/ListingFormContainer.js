import ListingsForm from '../components/ListingsForm.js';
import { createListing, createListingSuccess, createListingFailure, resetNewListing} from '../actions/listings';
import {reduxForm} from 'redux-form';

var listingData;

function onDrop(file) {
  listingData = new FormData()
  listingData.append('image', file[0])
}


//Client side validation
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

//For any field errors upon submission (i.e. not instant check)
const validateAndCreateListing = (values, dispatch) => {

  return new Promise((resolve, reject) => {


    let token = sessionStorage.getItem('jwtToken');
    if (!token || token === '') { //if there is no token, dont bother,
      let data = {data: {message: 'Please Sign In'}};//axios like error
      dispatch(createListingFailure(data)); // but let other comps know
      reject(data); //this is for redux-form itself
      return;
    }
    values = JSON.stringify(values)
    listingData.append("listing", values)
    dispatch(createListing(listingData, token))
      .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error 
        if (response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(createListingFailure(response.payload));
          reject(data); //this is for redux-form itself
        } else {
          //let other components know that everything is fine by updating the redux` state
          dispatch(createListingSuccess(response.payload));
          resolve(); //this is for redux-form itself
        }
      });

  });
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


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'ListingsNewForm',
  fields: ['title', 'description', 'price', 'zipcode','tags'],
  validate
}, mapStateToProps, mapDispatchToProps)(ListingsForm);