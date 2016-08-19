import React, { Component } from 'react';
import WelcomeView from './welcomeView.js'
import MainView from './mainView.js'

var Chat = React.createClass({

  getInitialState: function() {
    return {
      username: null
    };
  },

  _onName: function(e){
   if (e.nativeEvent.keyCode != 13) return;
   var username = e.target.value;
   this.setState({username: username});
 },

  render: function() {
    return (
      <div>
      <WelcomeView username={this.state.username} _onName={this._onName} />
      <MainView username={this.state.username} />

      </div>
    );
  }

});


export default Chat 
