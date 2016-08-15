import React, { Component } from 'react';

export default class MyProfile extends Component {
  render(){
    return(
      <div>

        <div className="avatar">
          Avatar pic goes here.
        </div>
        <div className="user-info">
          <h2>NAME</h2>
          <h4>Address, phone number, email address</h4>
        </div>
        {/* <Link to={'/edit_profile'}>Edit Profile</Link> */}

        <div className="listings">
          "Listings"
        </div>



      </div>
    )
  }
}
