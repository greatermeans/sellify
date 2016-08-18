import $ from 'jquery'

const joinOrganizations = (orgsAndUser)=>{
	const URL = 'http://localhost:3000/api/v1/users/'+`${orgsAndUser.currentUser.id}`+'/join_org'
	var request = $.ajax({
  		url: URL,
  		type:"POST",
  		data: JSON.stringify({relatedGroups:orgsAndUser.cleanOrgs}),
  		contentType: "application/json; charset=utf-8",
  		dataType:"json"
  })
	return {
		type: 'JOIN_ORG',
		payload: request
	}

}

export default joinOrganizations
