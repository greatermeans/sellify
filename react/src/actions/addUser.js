import axios from 'axios'

const addUser = (userData)=>{
	const request = 'http://localhost:3000/api/v1/users/'
	axios.post(request,userData)
	.then( (response)=>{
		debugger
		return {
		type: 'ADD_USER',
		payload: response
	}
  })
}

export default addUser
