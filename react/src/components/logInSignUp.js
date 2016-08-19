import React, { Component } from 'react';
import LoginForm from '../containers/login'
import NewUserForm from './newUserForm'

export default class LogInSignUp extends Component {
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
          <NewUserForm /><br />
          Already a member?
          <LoginForm />
          <br />
					</div>
				</div>
			</div>
      </div>
    )
  }
}
