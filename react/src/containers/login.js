import React, { Component } from 'react';
import { authorizeUser } from '../actions/authentication'
import { reduxForm } from 'redux-form';
var Modal = require('boron/DropModal');


class LoginForm extends Component {
  showModal() {
    this.refs.modal.show();
  }

  hideModal() {
    this.refs.modal.hide();
  }

  submitHandler(userData) {
    this.props.authorizeUser(userData)
  }

  render() {
    const {fields: {email, password}, handleSubmit} = this.props;
    return(
      <div>
        <button className="btn btn-primary btn-outline" onClick={this.showModal.bind(this)}>Login</button>

        <Modal ref="modal">
          <h3>Login</h3>
            <form id='new_user' onSubmit={handleSubmit(this.submitHandler.bind(this))}>
            <fieldset>
              <label >Email:</label>
              <input type='text' {...email} /><br/>

              <label >Password:</label>
              <input type='password' {...password}  /><br/>
              <button className="btn btn-primary" role="button" type='submit'>Login</button>
            </fieldset>

            </form>
          <button className="btn btn-primary" role="button" onClick={this.hideModal.bind(this)}>x</button>
          </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user, authenticated: state.authenticated}
}

export default reduxForm({
 form: 'userLoginForm',
 fields: ['email', 'password']
}, mapStateToProps,{authorizeUser})(LoginForm);
