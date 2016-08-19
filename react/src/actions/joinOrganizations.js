import $ from 'jquery'

const joinOrganizations = (orgsAndUser)=>{
	let orgIds = orgsAndUser.selectedOrganizations.map((org)=>{return org.value})
	const URL = 'http://localhost:3000/api/v1/users/'+`${orgsAndUser.currentUser.id}`+'/join_org'
	var request = $.ajax({
  		url: URL,
  		type:"POST",
  		data: JSON.stringify({orgIds:orgIds}),
  		contentType: "application/json; charset=utf-8",
  		dataType:"json",
  		headers: { authorization: localStorage.getItem('token')}
  })
	return {
		type: 'USER_LOGIN',
		payload: request
	}
}

export default joinOrganizations
