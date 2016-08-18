import $ from 'jquery'

const userLogin = (userData)=>{
	const URL = 'http://localhost:3000/authorize'
	var request = $.ajax({
  		url: URL,
  		type:"POST",
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
