import React, { Component } from 'react';
import { Link } from 'react-router';
import SignIn from './SignIn'

export default class Landing extends Component {
  render(){
    return(
      <div id='graybg'>
        <div className="fh5co-narrow-content" id='landing'>
          <div className="row">
            <div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
              <h1 className="fh5co-heading-colored">
              Welcome to Sellify
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
            <p className="fh5co-lead">
            Want to be a minimalist?<br/>
            Sell your unwanted stuff today.<br/>
            This is a placeholder.
            </p>


            <Link to="/signup" className="btn btn-md btn-primary">Get Started</Link>
            <br />Already a member?<br />
            <Link to="/signin" className="btn btn-md btn-primary">Sign In</Link>

                <Link
                   to={{
                     pathname: `/signup`,
                     state: { modal: true, returnTo: this.props.location.pathname }
                   }}
                   className="btn btn-md btn-primary"
                 > Sign up </Link>

                 <Link
                    to={{
                      pathname: `/signin`,
                      state: { modal: true, returnTo: this.props.location.pathname },
                    }}
                    className="btn btn-md btn-primary"
                  > Sign In now </Link>


        </div>
      </div>
        </div>
      </div>
    )
  }
}
