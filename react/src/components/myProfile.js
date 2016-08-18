import React, { Component } from 'react';
import { connect } from 'react-redux'
import auth from '../containers/authenticationResource'
import ListingBox from './listingBox'

const MyProfile = class extends Component {
  render(){
    return(
      <div>
      <h3>My Listings</h3>
        {this.props.user.listings.map((listing, ind)=>{
          return <ListingBox key={ind} {...listing} />
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {

	return { user: state.user, authenticated: state.authenticated }
}

const SmartMyProfile = connect(mapStateToProps)(MyProfile)

const AuthMyProfile = auth(SmartMyProfile)
export default AuthMyProfile;
