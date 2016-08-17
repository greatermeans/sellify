import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import addListing from '../actions/addListing'
import {browserHistory} from 'react-router'
var Modal = require('boron/DropModal');


export default class NewListingForm extends Component{

    showModal() {
      this.refs.modal.show();
    }

    hideModal() {
      this.refs.modal.hide();
    }

    submitHandler(listingData) {
      listingData.user_id = this.props.user.id
      this.props.addListing(listingData).then(browserHistory.push('/dashboard'))
    }

    render() {

      const {fields: {title, description, location, price, image}, handleSubmit} = this.props;
      return (
        <div>
          <button onClick={this.showModal.bind(this)}>Create new listing</button>
          <Modal ref="modal">
            <h3>Create New Listing</h3>
            <form id='new_listing' onSubmit={handleSubmit(this.submitHandler.bind(this))}>
              <label>Title:</label>
              <input type='text' {...title}/><br/>
              <label>Description:</label>
              <input type='text' {...description}/><br/>
              <label>Location:</label>
              <input type='text' {...location}/><br/>
              <label>Price:</label>
              <input input type="number" min="0.01" step="0.01" max="2500" {...price}/><br/>
              <label>Image:</label>
              <input type='text' {...image}/><br/>
              <button type='submit'>Add</button>
            </form>
            <button onClick={this.hideModal.bind(this)}>Close</button>
          </Modal>
        </div>
      );
    }
};

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default reduxForm({
 form: 'newListingForm',
 fields: ['title', 'description', 'price', 'location', 'image']
}, mapStateToProps,{addListing})(NewListingForm);
