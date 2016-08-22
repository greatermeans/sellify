import React, { Component } from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../containers/HeaderContainer.js';
import SignInFormContainer from '../containers/SignInFormContainer.js';

const Modal = class extends Component {
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
    debugger
    return (
      <div style={this.styles}>
        <p><Link to={this.props.returnTo}>Back</Link></p>
        {this.props.children}
      </div>
    )
  }
}

class UserNew extends Component {

	componentWillReceiveProps(nextProps) {
	    debugger
	    // if we changed routes...
	    if ((
	      nextProps.location.key !== this.props.location.key &&
	      nextProps.location.state &&
	      nextProps.location.state.modal
	    )) {
	      // save the old children (just like animation)
	      this.previousChildren = this.props.children
	    }
  	}

  render() {

    let { location } = this.props
    debugger
    let isModal = (
      location.state &&
      location.state.modal
    )

    return (
      <div>

        <div>
          {isModal ?
            this.previousChildren :
            this.props.children
          }

          {isModal && (
            <Modal isOpen={true} returnTo={location.state.returnTo}>
              <SignInFormContainer {...this.props.children} />
            </Modal>
          )}
        </div>
      </div>
    )
  }

  /*render() {
  	debugger
    return (
      <div>
        <HeaderContainer type="user_new"/>
        <SignInFormContainer {...this.props}/>
      </div>
    );
  }*/

}


export default UserNew;
