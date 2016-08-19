import React, { Component } from 'react';
import { connect } from 'react-redux'
import auth from './authenticationResource'
<<<<<<< HEAD
import ListingBox from '../components/listingBox'
let _ = require('underscore')
=======
import SmartListingBox from '../components/listingBox'
>>>>>>> 4c19dff563100f7bf4698bf7a5a41d2c98c0f836

const AllListing = class extends Component {

  constructor(props) {
    super(props)
    this.state = {org_id: '',
                  chosenOrg: []}
  }

  displayAllListings() {
    var searchResults = this.props.search

      _.intersectionObjects = _.intersect = function(array) {
      var slice = Array.prototype.slice;
      var rest = slice.call(arguments, 1);
      return _.filter(_.uniq(array), function(item) {
        return _.every(rest, function(other) {
          //return _.indexOf(other, item) >= 0;
          return _.any(other, function(element) { return _.isEqual(element, item); });
        });
      });
    };

    if (this.props.search.length > 0 && this.state.chosenOrg.length > 0) {
      var filteredByOrg = _.intersectionObjects(this.state.chosenOrg[0].listings, searchResults)
      return filteredByOrg.map ( (listing, idx) => {
        return <ListingBox key={idx} {...listing}/>
      })
    } else if (this.props.search.length > 0 && this.state.chosenOrg.length == 0 ) {
        return this.props.search.map ( (listing, idx) => {
          return <ListingBox key={idx} {...listing}/>
        })
    } else if (this.state.chosenOrg.length > 0 && this.props.search.length == 0 ) {
        return this.state.chosenOrg[0].listings.map ( (listing, idx) => {
          return <ListingBox key={idx} {...listing}/>
        })
    } else {
      return this.props.user.all_listings.map ( (listing, idx) => {
        return <ListingBox key={idx} {...listing}/>
      })
    }
  }

  handleOnChange(event) {
    let orgId = parseInt(event.target.value)
    let chosenOrg = this.props.user.organizations.filter((org)=>{
      return org.id === parseInt(orgId)
    })
    if (chosenOrg.length > 0) {
      this.setState({ org_id: orgId,
                      chosenOrg: chosenOrg })
    } else {
      this.setState({ chosenOrg: [] })
    }
  }

  createDropdown() {
    return (
      <div>
      <select value={this.state.id} onChange={this.handleOnChange.bind(this)}>
       <option value="">All Organizations</option>
        {this.props.user.organizations.map ( (org, idx) => {
          return <option value={org.id}> {org.name} </option>
        })}
       </select>
      </div>
    )
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
	return {
    user: state.user,
    authenticated: state.authenticated,
    search: state.search
  }
}

const SmartAllListing = connect(mapStateToProps)(AllListing)

const AuthAllListing = auth(SmartAllListing)
export default AuthAllListing;
