import React, { Component } from 'react';
import './App.css';
import SmartHome from './containers/home'
import NavBar from  './components/navBar'
import authenticate from './actions/authenticate'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <SmartHome />
        {this.props.children}
      </div>
    );
  }
}

export default App;
