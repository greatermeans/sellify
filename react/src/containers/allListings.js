import React, { Component } from 'react';
import { connect } from 'react-redux'
import auth from './authenticationResource'

const AllListing = class extends Component {
  render() {
    return (
      <div>
      HELLOOOOOO
      </div>
    )
  }
}

function mapStateToProps(state) {
	return { user: state.user, authenticated: state.authenticated }
}

const SmartAllListing = connect(mapStateToProps)(AllListing)

const AuthAllListing = auth(SmartAllListing)
export default AuthAllListing;
