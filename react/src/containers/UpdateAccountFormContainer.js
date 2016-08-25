import UpdateAccountForm from '../components/UpdateAccountForm.js';
import {updateAccount, updateAccountSuccess, updateAccountFailure, resetUpdateAccountState } from '../actions/updateAccount';
import { validateUserFields, validateUserFieldsSuccess, validateUserFieldsFailure, resetValidateUserFields } from '../actions/validateUserFields';
import { updateUserAccount } from '../actions/users';

import { reduxForm } from 'redux-form';


//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.email || values.email.trim() === '') {
    errors.username = 'Enter email';
    hasErrors = true;
  }
  if (!values.zipcode || values.zipcode.trim() === '' || values.zipcode.length !== 5) {
    errors.zipcode = 'Invalid Zip Code';
    hasErrors = true
  }
   return hasErrors && errors;
} 


//For instant async server validation
const asyncValidate = (values, dispatch) => {

  return new Promise((resolve, reject) => {

    dispatch(validateUserFields(values))
    .then((response) => {
        let data = response.payload.data;
        //if status is not 200 or any one of the fields exist, then there is a field error
        if(response.payload.status != 200 || data.username || data.email) {
          //let other components know of error by updating the redux` state
          dispatch(validateUserFieldsFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
            //let other components know that everything is fine by updating the redux` state
          dispatch(validateUserFieldsSuccess(response.payload)); //ps: this is same as dispatching RESET_POST_FIELDS
          resolve();//this is for redux-form itself
        }
      });
  });
};


//For any field errors upon submission (i.e. not instant check)
const validateAndUpdateAccount = (values, dispatch) => {

  return new Promise((resolve, reject) => {

  let jwtToken = sessionStorage.getItem('jwtToken');
  if(!jwtToken || jwtToken === '') {
    alert('Please Sign In');
    reject();
    return;
  }

   dispatch(updateAccount(values, jwtToken))
    .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error 
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(updateAccountFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
          //let other components know that we got user and things are fine by updating the redux` state 
          dispatch(updateAccountSuccess(response.payload)); 
          dispatch(updateUserAccount(values));//update current user's email (in user's state)
          resolve();//this is for redux-form itself
        }
      });
  });
};



const mapDispatchToProps = (dispatch) => {
  return {
   validateAndUpdateAccount: validateAndUpdateAccount,
   resetMe: () =>{
     dispatch(resetUpdateAccountState());
     dispatch(resetValidateUserFields());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return { 
    updateAccount: state.updateAccount,
    user: state.user,
    initialValues: {email: state.user.user && state.user.user.email,zipcode: state.user.user && state.user.user.zipcode}
  };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'UpdateAccountForm', 
  fields: ['email','zipcode'], 
  asyncValidate,
  asyncBlurFields: ['email'],
  validate 
}, mapStateToProps, mapDispatchToProps)(UpdateAccountForm);
