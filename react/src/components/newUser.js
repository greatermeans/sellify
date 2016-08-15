import React, {Component} from 'react'
import addUser from '../actions/addUser'

class NewUser extends Component{

	submitHandler(event){
		event.preventDefault()
		let userData = JSON.stringify(event.target.firstChild.value)
		debugger
		addUser(userData)
	}

	render(){
		return(
			<form onSubmit={this.submitHandler.bind(this)}>
				<input type='text' placeholder='enter your name'></input>
				<button type='submit'>new user</button>
			</form>
		)
	}

}

export default NewUser