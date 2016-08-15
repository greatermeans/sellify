import $ from 'jquery'

const addUser = (userData)=>{
	const URL = 'http://localhost:3000/api/v1/users'
	var request = $.ajax({
  		url: URL,
  		type:"POST",
  		data: JSON.stringify({user: userData}),
  		contentType: "application/json; charset=utf-8",
  		dataType:"json"
  })
	return {
		type: 'ADD_USER',
		payload: request
	}

}

export default addUser
