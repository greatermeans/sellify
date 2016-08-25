import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone'

class ListingsForm extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newListing.listing && !nextProps.newListing.error) {
      this.context.router.push('/');
    }
  }

  renderError(newListing) {
    if(newListing && newListing.error && newListing.error.message) {
      return (
        <div className="alert alert-danger">
          {newListing ? newListing.error.message : ''}
        </div>
      );
    } else {
      return <span></span>
    }
  }

  render() {
    const {fields: { title, description, zipcode, price, tags }, handleSubmit, submitting, newListing, onDrop} = this.props;
    return (
      <div className="container">
      {this.renderError(newListing)}
      <h2>Create New Listing</h2>
      <form onSubmit={handleSubmit(this.props.createListing.bind(this))}>
        <div className={`form-group ${title.touched && title.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Title*</label>
          <input type="text" className="form-control" {...title} />
          <div className="help-block">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${description.touched && description.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Description*</label>
          <textarea className="form-control" {...description} />
          <div className="help-block">
            {description.touched ? description.error : ''}
          </div>
        </div>

        <div className={`form-group ${price.touched && price.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Price*</label>
          <input type="numeric" className="form-control" {...price} />
          <div className="help-block">
            {price.touched ? price.error : ''}
          </div>
        </div>

        <div className={`form-group ${zipcode.touched && zipcode.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Zip Code(5-digit)*</label>
          <input type="text" pattern="[0-9]{5}" className="form-control" {...zipcode} />
          <div className="help-block">
            {zipcode.touched ? zipcode.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label className="control-label">Add an Image</label>
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={onDrop.bind(this)}>
          </Dropzone>
        </div>


        <div className={`form-group ${tags.touched && tags.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Choose Your Tags*</label>
          <input type="text" className="form-control" {...tags} />
          <div className="help-block">
            {tags.touched ? tags.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>
        <Link to="/" className="btn btn-error">Cancel</Link>
      </form>
      </div>


    );
  }
}

export default ListingsForm;
