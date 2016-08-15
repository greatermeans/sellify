import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import addListing from '../actions/addListing'
var Modal = require('boron/DropModal');

class NewListingForm extends Component{
    showModal() {
      this.refs.modal.show();
    }

    hideModal() {
      this.refs.modal.hide();
    }

    render() {
      const {fields: {title, description, location, price, image}, handleSubmit} = this.props;
      return (
        <div>
          <button onClick={this.showModal.bind(this)}>Open</button>
          <Modal ref="modal">
            <h3>Create New Listing</h3>
            <form id='new_listing' onSubmit={handleSubmit(addListing)}>
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
              <button type='submit'>Submit</button>
            </form>
            <button onClick={this.hideModal.bind(this)}>Close</button>
          </Modal>
        </div>
      );
    }
};

NewListingForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
 form: 'newListing',                           // a unique name for this form
 fields: ['title', 'description', 'price', 'location', 'image'] // all the fields in your form
})(NewListingForm);

export default NewListingForm