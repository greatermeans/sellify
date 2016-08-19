import React, { Component } from 'react';
import './App.css';
import userLogin from './actions/userLogin'

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
