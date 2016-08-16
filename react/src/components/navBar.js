import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class NavBar extends Component {
  render(){
    return(
      <div className='nav-bar'>
        <ul>
          <li> <Link to={'/home'}>Home</Link> </li>
          <li> <Link to={'/my_profile'}>My Profile</Link> </li>
          <li> <Link to={'/'}>Logout</Link> </li>
          <li> <input type="text" name="search" placeholder="Search" /> </li>
        </ul>
      </div>
    )
  }
}
