import React, { Component } from 'react';
import userLogin from '../actions/userLogin'
import { reduxForm } from 'redux-form';
var Modal = require('boron/DropModal');


export default class LoginForm extends Component {
  showModal() {
    this.refs.modal.show();
  }

  hideModal() {
    this.refs.modal.hide();
  }

  submitHandler(userData) {
    this.props.userLogin(userData)
  }

  render() {
    const {fields: {email, password}, handleSubmit} = this.props;
    return(
      <div>
        <button onClick={this.showModal.bind(this)}>Login</button>
        <Modal ref="modal">
          <h3>Login</h3>
            <form id='new_user' onSubmit={handleSubmit(this.submitHandler.bind(this))}>
              <label>Email:</label>
              <input type='text' {...email}/><br/>
              <label>Password:</label>
              <input type='password' {...password}/><br/>
              <button type='submit'>Login</button>
            </form>
          <button onClick={this.hideModal.bind(this)}>Close</button>
          </Modal>
      </div>
    )
  }
}

export default reduxForm({
 form: 'userLoginForm',
 fields: ['email', 'password']
}, null,{userLogin})(LoginForm);
