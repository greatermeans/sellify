import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import NewUser from './components/newUser'


class App extends Component {
  render() {
    return (
      <div>
      	<Home />
      	<NewUser />
      </div>
    );
  }
}

export default App;
