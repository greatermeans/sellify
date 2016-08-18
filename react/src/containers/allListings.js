import React, { Component } from 'react';
import { connect } from 'react-redux'
import auth from './authenticationResource'
import ListingBox from '../components/listingBox'

const AllListing = class extends Component {

  constructor(props) {
    super(props)
    this.state = {listings: this.props.user.all_listings}
  }

  displayAllListings() {
    return this.state.listings.map ( (listing, idx) => {
      return <ListingBox key={idx} {...listing}/>
    })
  }

  createDropdown() {
    return (
      <div>
      <select value="" onChange={this.handleOnChange.bind(this)}>
       <option value="" selected>All Organizations</option>
        {this.props.user.organizations.map ( (org, idx) => {
          return <option value={org.id}> {org.name} </option>
        })}
       </select>
      </div>
    )
  }

  handleOnChange(event) {
    let chosenOrg = this.props.user.organizations.filter((org)=>{
      return org.id === parseInt(event.target.value)
    })
    this.setState({listings: chosenOrg[0].listings})
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
