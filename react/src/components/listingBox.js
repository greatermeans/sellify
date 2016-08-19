import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import viewListing from '../actions/viewListing'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const ListingBox = class extends Component{
  handleClick(){
    this.props.viewListing(this.props)
    browserHistory.push(`/listings/${this.props.id}`)
  }



  render(){
    const {image, price, description, title, id} = this.props
    return(
      <div className="col-sm-6 col-md-6">
        <div className="thumbnail">
          <div className="caption">
            <h3>{title}</h3>
            <img src={image}></img>
            <p> ${price} {description}</p>
            <button className="btn btn-primary btn-outline" onClick={this.handleClick.bind(this)}>view this listing</button>
            <p>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({viewListing: viewListing}, dispatch)
}

const SmartListingBox = connect(null,mapDispatchToProps)(ListingBox)

export default SmartListingBox
