import React from 'react';
import { Component } from 'react';

export default class App extends Component {
	componentWillMount() {
    this.props.loadUserFromToken()
  }

  render() {
		if(sessionStorage.jwtToken){
			return (
				<div>
					{this.props.children}
				</div>
			)
		}
		else{
			return (
	      <div>
	        {this.props.children}
	      </div>
	    );
		}
  }
}
