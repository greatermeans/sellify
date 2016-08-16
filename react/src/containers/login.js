import React, { Component } from 'react';
import userLogin from '../actions/userLogin'
import { reduxForm } from 'redux-form';

export default class LoginForm extends Component {

  submitHandler(userData) {
    this.props.userLogin(userData)
  }

  render() {
    const {fields: {email, password}, handleSubmit} = this.props;
    return(
      <div>
      <form id='new_user' onSubmit={handleSubmit(this.submitHandler.bind(this))}>
        <label>Email:</label>
        <input type='text' {...email}/><br/>
        <label>Password:</label>
        <input type='password' {...password}/><br/>
        <button type='submit'>Login</button>
      </form>
      </div>
    )
  }
}

export default reduxForm({
 form: 'userLoginForm',
 fields: ['email', 'password']
}, null,{userLogin})(LoginForm);
