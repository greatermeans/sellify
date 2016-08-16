import $ from 'jquery'

const userLogin = (userData)=>{
	const URL = 'http://localhost:3000/api/v1/users'
	var request = $.ajax({
  		url: URL,
  		type:"GET",
  		data: JSON.stringify({user: userData}),
  		contentType: "application/json; charset=utf-8",
  		dataType:"json"
  })
	return {
		type: 'USER_LOGIN',
		payload: request
	}

}

export default userLogin
