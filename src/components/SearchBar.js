import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchListings, searchTerm } from '../actions/listings';
import Fuse from 'fuse.js'

const SearchBar = class extends Component {

  handleOnKeyPress(event){
    if (event.charCode === 13) {
      var options = {
        threshold: 0.5,
        keys: ['title']
      }
      var fuse = new Fuse(this.props.user.user.all_listings, options)
      var searchResult = fuse.search(event.target.value)
      this.props.action.searchTerm(event.target.value)
      this.props.action.searchListings(searchResult)
      browserHistory.push('/listings')
    }
  }

  render() {
    return (
       <input type="text" name="search" placeholder="Search" onKeyPress={this.handleOnKeyPress.bind(this)}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    search: state.listings.searchResults,
    searchTerm: state.listings.searchTerm
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: {
    searchListings: bindActionCreators(searchListings, dispatch),
    searchTerm: bindActionCreators(searchTerm, dispatch)
    }
  }
}

const SmartSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar)

export default SmartSearchBar
