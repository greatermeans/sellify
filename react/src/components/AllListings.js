import React, { Component } from 'react';
import ListingsBox from './ListingsBox'

const AllListings = class extends Component {
  componentWillMount() {
    this.props.fetchAllListings();
  }

  constructor(props) {
    super(props)
    this.state = {listings: this.props.user.user.all_listings,
                  chosenOrg: ''}
  }

  displayAllListings() {
    var chosenOrg = this.state.chosenOrg
    var search = this.props.search
    var listings = chosenOrg.listings
    var searchList = []

    if (search.length == 0 && chosenOrg == '') {
      return this.state.listings.map ( (listing, idx) => {
        return <ListingsBox key={idx} {...listing}/>
      })
    } else if (search.length == 0 && chosenOrg !== '') {
      return this.state.listings.map ( (listing, idx) => {
        return <ListingsBox key={idx} {...listing}/>
      })
    } else if (search.length > 0 && chosenOrg == '') {
      return search.map ( (listing, idx) => {
        return <ListingsBox key={idx} {...listing}/>
      })
    } else if (search.length > 0 && chosenOrg !== '') {
        for(var arr in (listings)){
          for(var filter in search){
            if (listings[arr].id == search[filter].id) {
              searchList.push(listings[arr]);
            }
          }
        }
        return searchList.map ( (listing, idx) => {
          return <ListingsBox key={idx} {...listing}/>
        })
    }
  }

  handleOnChange(event) {
    let chosenOrg = this.props.user.user.organizations.filter((org)=>{
      return org.id === parseInt(event.target.value)
    })
    if (chosenOrg.length === 0) {
      this.setState({listings: this.props.user.user.all_listings,
                     chosenOrg: ''})
    } else {
      this.setState({listings: chosenOrg[0].listings,
                     chosenOrg: chosenOrg[0]})
    }
  }

  createDropdown() {
    return (
      <div>
      <select value={this.state.id} onChange={this.handleOnChange.bind(this)}>
       <option value="">All Organizations</option>
        {this.props.user.user.organizations.map ( (org, idx) => {
          return <option value={org.id}> {org.name} </option>
        })}
       </select>
      </div>
    )
  }

  displaySearch() {
    //still in progress
  }

  render() {
    const { listings, loading, error } = this.props.allListings;

    if(loading) {
      return <div className="container"><h1>All Listings</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div>
        <h3>Filter by Organization </h3>
          {this.createDropdown()}
          {this.displaySearch()}
          <br/>
        <h1> Listings </h1>
          {this.displayAllListings(listings)}
      </div>
    )
  }
}


export default AllListings
