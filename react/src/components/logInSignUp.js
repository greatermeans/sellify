import React, { Component } from 'react';
import LoginForm from '../containers/login'
import NewUserForm from './newUserForm'

export default class LogInSignUp extends Component {
  render(){
    return(
      <div>
        <LoginForm />
        <NewUserForm />
      </div>
    )
  }
}
