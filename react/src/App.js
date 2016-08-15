import React, { Component } from 'react';
import './App.css';
import User from './containers/user'
import NewUser from './components/newUser'


class App extends Component {
  render() {
    return (
      <div>
      	<User />
      	<NewUser />
      </div>
    );
  }
}

export default App;
