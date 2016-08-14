import React, {Component} from 'react'

class NewUser extends Component{
	submitHandler(event){
		event.preventDefault()
		let name = event.target.value

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