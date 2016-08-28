import UpdateAccountForm from '../components/UpdateAccountForm.js';
import {updateAccount, updateAccountSuccess, updateAccountFailure, resetUpdateAccountState } from '../actions/updateAccount';
import { validateUserFields, validateUserFieldsSuccess, validateUserFieldsFailure, resetValidateUserFields } from '../actions/validateUserFields';
import { updateUserAccount } from '../actions/users';

import { reduxForm } from 'redux-form';

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

const asyncValidate = (values, dispatch) => {

  return new Promise((resolve, reject) => {
    dispatch(validateUserFields(values))
    .then((response) => {
        let data = response.payload.data;
        if(response.payload.status != 200 || data.username || data.email) {
          dispatch(validateUserFieldsFailure(response.payload));
           reject(data); 
         } else {
          dispatch(validateUserFieldsSuccess(response.payload)); 
          resolve();
        }
      });
  });
};

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
        let data = response.payload.data
        if(response.payload.status != 200) {
          dispatch(updateAccountFailure(response.payload))
           reject(data); 
         } else {
          dispatch(updateAccountSuccess(response.payload))
          dispatch(updateUserAccount(values))
          resolve()
        }
      })
  })
}

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

export default reduxForm({
  form: 'UpdateAccountForm', 
  fields: ['email','zipcode'], 
  asyncValidate,
  asyncBlurFields: ['email'],
  validate 
}, mapStateToProps, mapDispatchToProps)(UpdateAccountForm);
