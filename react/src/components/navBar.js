import React, { Component } from 'react';
import { Link } from 'react-router'
import {connect} from 'react-redux'
import SearchBar from '../containers/searchBar'

const NavBar = class extends Component {

  render(){
    return(
      <div id='id="fh5co-page"'>
      <aside id="fh5co-aside" role="complementary" className="border js-fullheight">
        <h1 id="fh5co-logo">
        <img src="images/logo.png"  /><br />
        </h1>
        <nav id="fh5co-main-menu" role="navigation">
          <ul>
            <li className='fh5co-active'><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/listings'}>Listings</Link></li>
            <li><Link to={'/my_profile'}>My Profile</Link></li>
            <li><Link to={'/'} onClick>Logout</Link></li>
            <li> <SearchBar /> </li>

          </ul>
        </nav>
        <div className="fh5co-footer">
        <small>© 2016 Sellify</small><br />
        <a href='https://github.com/greatermeans/sellify'><i className='icon-github'/></a>
        </div>

      </aside>


    )
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated }
}

const SmartNavBar = connect(mapStateToProps)(NavBar)

export default SmartNavBar
