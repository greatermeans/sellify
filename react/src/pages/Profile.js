import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import UpdateEmailFormContainer from '../containers/UpdateEmailFormContainer.js';
import ProfileCardContainer from '../containers/ProfileCardContainer.js';

class Profile extends Component {
  render() {
    return (
      <div className='col-md-4'>
        <HeaderContainer type="users_new"/>
        <div className='fh5co-narrow-content  animate-box fadeInLeft animated'>
        <div className="container">
        	<h2>Profile</h2>

        	<div className='well'>
        		<ProfileCardContainer />
        	</div>
        	<div className='well'>
        		<UpdateEmailFormContainer />
        	</div>
          </div>
        </div>
      </div>
    );
  }
}


export default Profile;
