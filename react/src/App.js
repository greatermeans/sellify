import React, { Component } from 'react';
import './App.css';
import Home from './containers/home'
import NewUser from './components/newUser'
import NavBar from  './components/navBar'


class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
