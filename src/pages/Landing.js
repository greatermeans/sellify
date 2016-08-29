import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Landing extends Component {

  componentDidMount () {
    if (this.props.user.status === 'logout') {
      window.location.reload()
    }

  }

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
            </p>


            <Link to={{
              pathname: `/signup`,
              state: { modal: true, returnTo: this.props.location.pathname }
              }}
              className="btn btn-md btn-primary">Get Started</Link>

            <br />Already a member?<br />

            <Link   to={{
                pathname: `/signin`,
                state: { modal: true, returnTo: this.props.location.pathname },
                }}
              className="btn btn-md btn-primary">Sign In</Link>


        </div>
      </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Landing);
