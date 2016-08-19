import React, { Component } from 'react';

var MainView = React.createClass({

  getInitialState: function() {
    return {
      messages: []
    };
  },

  _onMessage: function(e){
  if (e.nativeEvent.keyCode != 13) return;

  var input = e.target;
  var text = input.value;

  // if the text is blank, do nothing
  if (text === "") return;

  var message = {
    username: this.props.username,
    text: text,
    time: new Date()
  }

  $.post('/messages', message).success(function(){
    // reset the input
    input.value = ""
  });

},

  render: function() {

    if (!this.props.username) var style = {display:'none'}

    return (
      <div style={style}>
        <input placeholder="Type your message" onKeyPress={this._onMessage} />
      </div>
    );
  }

});

export default MainView
