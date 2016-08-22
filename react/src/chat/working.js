import React, { Component } from 'react';

const ChatApp = class extends Component {
	constructor(props) {
		super(props)
		this.state = { messages: [],
									socket: window.io('http://localhost:3002') }
	}

	componentDidMount() {
		this.state.socket.emit("test")
	}

	render(){
		return (
		<div>
			 <p>{this.props.name}</p>
			 <span> {this.props.message} </span>
		 </div>
	 )
	}
}
export default ChatApp








var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('we have a connection');
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
  socket.on("test", function(){
    console.log('mounted');
  })
});

http.listen(3002, function(){
  console.log('listening on *:3002');
});
