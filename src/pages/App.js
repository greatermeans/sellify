import React, { Component } from 'react';
import AppContainer from '../containers/AppContainer';
import Modal from '../components/Modal'

export default class App extends Component {

  componentWillReceiveProps(nextProps) {
	    if ((
	      nextProps.location.key !== this.props.location.key &&
	      nextProps.location.state &&
	      nextProps.location.state.modal
	    )) {
	      this.previousChildren = this.props.children
	    }
  	}

  render() {
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )
    debugger
    return (
    	<AppContainer>
        <div id='fh5co-main'>
          {isModal ?
            this.previousChildren :
            this.props.children
          }

          {isModal && (
            <Modal isOpen={true} returnTo={location.state.returnTo}>
              {this.props.children}
            </Modal>
          )}
        </div>
    	</AppContainer>
    )
  }
}
