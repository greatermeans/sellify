import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
var Modal = require('boron/DropModal');

default class CreateListing extends Component {
  showModal: function(){
    this.refs.modal.show();
  },
  hideModal: function(){
    this.refs.modal.hide();
  },
  
  render: function() {
    return (
      <div>
        <button onClick={this.showModal}>Open</button>
        <Modal ref="modal">
          <h2>Create New Listing</h2>

          <button onClick={this.hideModal}>x</button>
        </Modal>
      </div>
    );
  }
};

export default CreateListing
