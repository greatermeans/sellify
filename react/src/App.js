import React, { Component } from 'react';
import './App.css';
import Listing from './containers/listing'
import NewUser from './components/new_user.js'

class App extends Component {
  render() {
    return (
      <div>
        <NewUser />
        <Listing />
      </div>
    );
  }
}

export default App;
