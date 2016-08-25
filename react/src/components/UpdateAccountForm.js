import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ListingsBox from './ListingsBox'

class UpdateAccountForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    //Important: If you are reusing a component that might have some state (like error), you should reset it
    //either here or in componentWillMount
     this.props.resetMe();
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
  //     this.context.router.push('/');
  //   }

  //   //error
  //   //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
  //   //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
  //   if(nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
  //     alert(nextProps.user.error.message);
  //   }
  // }

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
        <div> <h4>Your Listings</h4><br/>
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
