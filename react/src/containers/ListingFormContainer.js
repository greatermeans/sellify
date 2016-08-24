import ListingsForm from '../components/ListingsForm.js';
import {
  createListing, createListingSuccess, createListingFailure, resetNewListing, validateListingFields, validateListingFieldsSuccess, validateListingFieldsFailure
}
from '../actions/listings';
import {
  reduxForm
}
from 'redux-form';

//Client side validation
function validate(values) {
  const errors = {};

  if (!values.title || values.title.trim() === '') {
    errors.title = 'Enter a Title';
  }
  if (!values.categories || values.categories.trim() === '') {
    errors.categories = 'Enter categories';
  }
  if (!values.content || values.content.trim() === '') {
    errors.content = 'Enter some content';
  }

  return errors;
}

//For instant async server validation
const asyncValidate = (values, dispatch) => {

  return new Promise((resolve, reject) => {

    dispatch(validateListingFields(values))
      .then((response) => {
        let data = response.payload.data;
        //if status is not 200 or any one of the fields exist, then there is a field error
        if (response.payload.status != 200 || data.title || data.categories || data.description) {
          //let other components know of error by updating the redux` state
          dispatch(validateListingFieldsFailure(response.payload));
          reject(data); //this is for redux-form itself
        } else {
          //let other components know that everything is fine by updating the redux` state
          dispatch(validateListingFieldsSuccess(response.payload)); //ps: this is same as dispatching RESET_POST_FIELDS
          resolve(); //this is for redux-form itself
        }
      });
  });
};

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
    dispatch(createListing(values, token))
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
    resetMe: () => {
      dispatch(resetNewListing());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    newListing: state.listings.newListing
  };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'ListingsNewForm',
  fields: ['title', 'categories', 'content'],
  asyncValidate,
  asyncBlurFields: ['title'],
  validate
}, mapStateToProps, mapDispatchToProps)(ListingsForm);
