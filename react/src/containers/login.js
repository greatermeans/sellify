import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return(
      <div>
      <form id='new_user' onSubmit={handleSubmit(addUser)}>
        <label>Email:</label>
        <input type='text' {...email}/><br/>
        <label>Password:</label>
        <input type='text' {...password}/><br/>
      </form>
      </div>
    )
  }
}
