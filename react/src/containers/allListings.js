import React, { Component } from 'react';
import { connect } from 'react-redux'
import auth from './authenticationResource'
import ListingBox from '../components/listingBox'

const AllListing = class extends Component {

  displayAllListings() {
    return this.props.user.all_listings.map ( (listing, idx) => {
      return <ListingBox key={idx} {...listing}/>
    })
  }

  createDropdown() {
    return (
      <div>
      <select value="" onChange={this.handleonChange.bind(this)}>
       <option value="" selected>All Organizations</option>
        {this.props.user.organizations.map ( (org, idx) => {
          return <option value={org.id}> {org.name} </option>
        })}
       </select>
      </div>
    )
  }

  handleonChange(event) {
    debugger
    this.props.user.organizations.filter((org)=>{
      return org.id === parseInt(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <h1> Listings </h1>
          {this.createDropdown()}
        <h3> Filter by Organization </h3>
          {this.displayAllListings()}
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
