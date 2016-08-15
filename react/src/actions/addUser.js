import axios from 'axios'

const addUser = (userData)=>{
	const request = 'http://localhost:3000/api/v1/users/'
	debugger
	axios.post(request,userData)
	.then( (response)=>{
		return {
		type: 'ADD_USER',
		payload: response
	}
  })
}

export default addUser 

