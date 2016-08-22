import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const Modal = class extends Component {
  debugger
  styles: {
    position: 'fixed',
    top: '20%',
    right: '20%',
    bottom: '20%',
    left: '20%',
    padding: 20,
    boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
    overflow: 'auto',
    background: '#fff'
  }

  render() {
    return (
      <div style={this.styles}>
        <p><Link to={this.props.returnTo}>Back</Link></p>
        {this.props.children}
      </div>
    )
  }
}


class SignInForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
      this.context.router.push('/dashboard');
    }

    //error
    //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
    //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
    if(nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
      alert(nextProps.user.error.message);
    }
  }

  render() {
    const {asyncValidating, fields: {username, password}, handleSubmit, submitting, user } = this.props;
    debugger
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.props.signInUser.bind(this))}>
        <Modal>
          <div className={`form-group ${username.touched && username.invalid ? 'has-error' : ''}`}>
            <label className="control-label">@username*</label>
            <input  placeholder="email" type="text" className="form-control" {...username} />
            <div className="help-block">
              {username.touched ? username.error : ''}
            </div>
            <div className="help-block">
            {asyncValidating === 'username' ? 'validating..': ''}
            </div>
          </div>


          <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
            <label className="control-label">Password*</label>
            <input type="password" className="form-control" {...password} />
            <div className="help-block">
              {password.touched ? password.error : ''}
            </div>
          </div>
          <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>
          <Link to="/" className="btn btn-error">Cancel</Link>
          </Modal>
        </form>
    </div>

    );
  }
}

export default SignInForm;
