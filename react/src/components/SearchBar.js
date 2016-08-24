import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Fuse from 'fuse.js'
import { bindActionCreators } from 'redux'
import searchListings from '../actions/searchListings'

const SearchBar = class extends Component {

 handleOnKeyPress(event){
   if (event.charCode === 13) {

     var options = {
       threshold: 0.5,
       keys: ['title']
     }
     var fuse = new Fuse(this.props.user.user.all_listings, options)
     var searchResult = fuse.search(event.target.value)
     this.props.searchListings(searchResult)
     browserHistory.push('/listings')
   }
 }

 render() {
   return (
       <input type="text" name="search" placeholder="Search" onKeyPress={this.handleOnKeyPress.bind(this)}/>
   )
 }
}

function mapStateToProps(state){
 return { user: state.user,
         search: state.search
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({searchListings: searchListings}, dispatch)
}

const SmartSearchBar = connect(mapStateToProps,mapDispatchToProps)(SearchBar)

export default SmartSearchBar
