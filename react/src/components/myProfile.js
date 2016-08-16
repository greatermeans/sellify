import React, { Component } from 'react';
import { connect } from 'react-redux'
import auth from '../containers/authenticationResource'

const MyProfile = class extends Component {
  render(){
    return(
      <div>
        TEST!!!!
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
