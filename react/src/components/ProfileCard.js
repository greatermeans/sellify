import React from 'react';
import { Component } from 'react';

export default class ProfileCard extends Component {

  render() {
    let user = this.props.user.user;
    return (
      <div>
        <h4>Name:</h4> {user && user.name}<br/>
        <h4>Username:</h4> {user && user.username}<br/>
        <h4>Email:</h4> {user && user.email}<br/>
        <h4>My Organizations:</h4>
        {this.props.user.user.organizations.map((organization)=>{
          return <li>{organization.name}</li>
        })}
        <br/><br/>
      </div>
    );
  }
}
