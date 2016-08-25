import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import UpdateAccountFormContainer from '../containers/UpdateAccountFormContainer.js';

class Profile extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="users_new"/>
        <div className="container">
        	<h2>Profile</h2>
          <div className='well'>
            <UpdateAccountFormContainer />
          </div>
        </div>
      </div>
    );
  }
}


export default Profile;
