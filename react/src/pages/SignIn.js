import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import SignInFormContainer from '../containers/SignInFormContainer.js';

class UserNew extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="user_new"/>
        <SignInFormContainer />
      </div>
    );
  }
}


export default UserNew;
