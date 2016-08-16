import React, { Component } from 'react';
import './App.css';
import Home from './containers/home'
import NavBar from  './components/navBar'


class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
