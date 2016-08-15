import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'


export default class Start extends Component {
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
