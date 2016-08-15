import React, {Component} from 'react'
import addUser from '../actions/add_user'

class NewUser extends Component{

	submitHandler(event){
		event.preventDefault()
		let name = event.target.value
		addUser({name:name})
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