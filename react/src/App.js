import React, { Component } from 'react';
import './App.css';
import Home from './containers/home'
import NavBar from  './components/navBar'
import authenticate from './actions/authenticate'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  authButton(){

      if(this.props.authenticated){
        return(<p>
          <button onClick={() => this.props.authenticate(false)}>
              Sign Out
          </button>
        </p>  )
      } else{
        return (<p>
          <button onClick={() => this.props.authenticate(true)}>
              Sign In
          </button>
        </p>)
      }
    }

  render() {
    return (
      <div>
      <NavBar />
      <Home />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({authenticate: authenticate}, dispatch)
}

const SmartApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default SmartApp;
