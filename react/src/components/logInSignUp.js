import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'


export default class LogInSignUp extends Component {
  render(){
    return(
      <div>
        <Link to={'/log_in'}>Log in</Link> <br/>
        <Link to={'/sign_up'}>Sign up</Link>
      </div>
    )
  }
}
