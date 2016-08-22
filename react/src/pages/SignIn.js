import React, { Component } from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../containers/HeaderContainer.js';
import SignInFormContainer from '../containers/SignInFormContainer.js';

class UserNew extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="user_new"/>
        <SignInFormContainer {...this.props}/>
      </div>
    )
  }
}


export default UserNew;
