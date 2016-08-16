import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

const Start = class extends Component {
  render(){
    debugger
    return(
      <div>
        if(this.props.authenticated){
          browserHistory.push('/home')
        } else {
          browserHistory.push('/authorize')
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated}
}

const SmartStart = connect(mapStateToProps)(Start)

export default SmartStart
