import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import SignUpFormContainer from '../containers/SignUpFormContainer.js';

class UserNew extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="user_new"/>
        <SignUpFormContainer />
      </div>
    );
  }
}


export default UserNew;
