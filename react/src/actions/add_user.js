import axios from 'axios'

const addUser = (userData)=>{
	var request = 'http://localhost:3000/api/v1/users/'
	axios.post(request,userData)
	.then( (response)=>{
		return {
		type: 'ADD_USER',
		payload: response
	}
  })
}

export default addUser 

