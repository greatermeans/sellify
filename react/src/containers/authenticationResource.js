import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

function auth(TestComponent){

  class Authorized extends Component {
    componentWillMount(){
      if(!this.props.authenticated){
        browserHistory.push('/')
      }
    }
    componentWillUpdate(newProps){
      if(!newProps.authenticated){
        browserHistory.push('/')
      }
    }
    render(){

      return (
        <TestComponent {...this.props}/>
      )
    }
  }

  function mapStateToProps(state){
    return { authenticated: state.authentication.authenticated }
  }

  return connect(mapStateToProps)(Authorized)

}

export default auth
