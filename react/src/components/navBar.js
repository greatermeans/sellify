import React, { Component } from 'react';
import { Link } from 'react-router'
import {connect} from 'react-redux'

const NavBar = class extends Component {

  render(){
    return(
      <div className='nav-bar'>
        <ul>
          <li> <Link to={'/dashboard'}>Dashboard</Link> </li>
          <li> <Link to={'/listings'}>Listings</Link> </li>
          <li> <Link to={'/my_profile'}>My Profile</Link> </li>
          <li> <Link to={'/'} onClick>Logout</Link> </li>
          <li> <input type="text" name="search" placeholder="Search" /> </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated }
}

const SmartNavBar = connect(mapStateToProps)(NavBar)

export default SmartNavBar
