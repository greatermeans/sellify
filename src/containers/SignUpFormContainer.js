import SignUpForm from '../components/SignUpForm.js';
import {signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/users';
import { validateUserFields, validateUserFieldsSuccess, validateUserFieldsFailure, resetValidateUserFields } from '../actions/validateUserFields';

import { reduxForm } from 'redux-form';

function validate(values) {
  var errors = {};
  var hasErrors = false;

  if (!values.name || values.name.trim() === '') {
    errors.name = 'Enter a name';
    hasErrors = true;
  }
  if(!values.email || values.email.trim() === '') {
    errors.email = 'Enter email';
    hasErrors = true;
  }
  if(!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
  if(!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = 'Enter Confirm Password';
    hasErrors = true;
  }

  if(values.confirmPassword  && values.confirmPassword.trim() !== '' && values.password  && values.password.trim() !== '' && values.password !== values.confirmPassword) {
    errors.password = 'Password And Confirm Password don\'t match';
    hasErrors = true;
  }
   return hasErrors && errors;
} 

const asyncValidate = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(validateUserFields(values))
    .then((response) => {
        let data = response.payload.data;
        if(response.payload.status !== 200) {
          dispatch(validateUserFieldsFailure(response.payload.response.data.error));
           reject(data); 
         } else {
          dispatch(validateUserFieldsSuccess(response.payload)); 
          resolve();
        }
      });
  });
};


const validateAndSignUpUser = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    let formValues = {email: values.email,
      first_name: values.name.split(' ')[0],
      last_name: values.name.split(' ')[1],
      password: values.password
    }
   dispatch(signUpUser(formValues))
    .then((response) => {
        let data = response.payload.data;
        if(response.payload.status !== 200) {
          dispatch(signUpUserFailure(response.payload));
           reject(data); 
         } else {
          sessionStorage.setItem('jwtToken', data.auth_token);
          dispatch(signUpUserSuccess(data.user)); 
          resolve();
        }
      });
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
   signUpUser: validateAndSignUpUser,
   resetMe: () =>{
     dispatch(resetValidateUserFields());
    }
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    validateFields: state.validateFields
  };
}

export default reduxForm({
  form: 'SignUpForm', 
  fields: ['name', 'email', 'password', 'confirmPassword'], 
  asyncValidate,
  asyncBlurFields: ['email'],
  validate 
}, mapStateToProps, mapDispatchToProps)(SignUpForm);
