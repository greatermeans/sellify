import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import LoginForm from '../containers/login'
import NewUserForm from './newUserForm'
var Modal = require('boron/DropModal');

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
