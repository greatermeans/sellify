import React, { Component } from 'react';
import ListingsBox from './ListingsBox'

class UpdateAccountForm extends Component {

  componentWillUnmount() {
     this.props.resetMe();
  }

  getMessage() {
    const {error, accountUpdated} = this.props.updateAccount;
    if(error) {
      return <div className="alert alert-danger">{error.message}</div>
    } else if(accountUpdated) {
      return <div className="alert alert-info">Account was updated </div>
    } else {
      return <span/>
    }
  }

  render() {
    const {asyncValidating, fields: {email, zipcode}, handleSubmit, submitting, user } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.validateAndUpdateAccount.bind(this))}>
        <div className='row'>
        <div className="col-md-5">
        {this.getMessage()}
        <div><label className="control-label">Name*</label></div>
        <div>{user.user.name}</div>

        <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Email*</label>
          <input type="email" className="form-control" {...email} />
          <div className="help-block">
            {email.touched ? email.error : ''}
          </div>
          <div className="help-block">
          {asyncValidating === 'email' ? 'validating..': ''}
          </div>
        </div>

        <div className={`form-group ${zipcode.touched && zipcode.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Zip Code(5-digit)*</label>
          <input type="text" pattern="[0-9]{5}" className="form-control" {...zipcode} />
          <div className="help-block">
            {zipcode.touched ? zipcode.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary"  disabled={submitting} >Update Account</button>
        </div>
        <div className='container'>
          <div className="col-md-5">
            <h4>My Organizations:</h4>
            {user.user.organizations.map((organization)=>{
              return <li>{organization.name}</li>
            })}
          </div>
        </div>
        <br />
        <div> <h4>My Listings</h4><br/>
        {user.user.listings.map((listing)=>{
            return <ListingsBox {...listing} />
          })}
        </div>
        </div>

      </form>
    );
  }
}

export default UpdateAccountForm;
