import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import addListing from '../actions/addListing'
import {browserHistory} from 'react-router'
import Dropzone from 'react-dropzone'
import $ from 'jquery'
import AWS from 'aws-sdk/dist/aws-sdk'


var Modal = require('boron/DropModal');
// AWS.config.region = 'us-east-1'


export default class NewListingForm extends Component{
  constructor(props){
    super(props)
    this.state = {image: ''}
  }

    showModal() {
      this.refs.modal.show();
    }

    hideModal() {
      this.refs.modal.hide();
    }

    submitHandler(listingData) {
      listingData.user_id = this.props.user.id
      var fd = new FormData()
      fd.append('image', this.state.image)
      this.props.addListing(listingData, fd).then(function(resp){
        browserHistory.push(`/listings/${resp.payload.id}`)
      })
    }

      // AWS.config.credentials = {accessKeyId: API_KEY, secretAccessKey: SECRET_KEY}
      // var file = this.state.image
      // var s3bucket = new AWS.S3({params: {Bucket: 'sellify'}})
      // var params = {Key: file.name, ContentType: file.type, Body: file};
      // s3bucket.upload(params)
      // debugger




      // $.ajax({
      //   url: "http://s3.amazonaws.com/sellify",
      // 	method: "POST",
      // 	data: formDataObj,
      //   contentType: false,
      //   processData: false  //{listing: listing, image: image},
      // }).then((resp) =>{
      //   debugger;
      //
      // })


    onDrop(file) {
      // var formdata = new FormData()
      this.setState({image: file[0]})
      // this.setState({image: formdata})
    }

    render() {

      const {fields: {title, description, location, price, image}, handleSubmit} = this.props;
      return (
        <div>
          <button className="btn btn-primary btn-outline" onClick={this.showModal.bind(this)}>Create new listing</button>
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
              <input type="number" min="0.01" step="0.01" max="2500" {...price}/><br/>
              <label>Image:</label>
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onDrop.bind(this)}>
              <p>Drag an image here or click to select a file to upload</p>
              </Dropzone>
              <br/>
              <input type='submit' value="Add"/>
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
 fields: ['title', 'description', 'price', 'location']
}, mapStateToProps, {addListing})(NewListingForm);
