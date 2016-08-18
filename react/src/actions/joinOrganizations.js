import $ from 'jquery'

const joinOrganizations = (relatedOrgs)=>{
	const URL = 'http://localhost:3000/api/v1/users/11/add_org'

	var request = $.ajax({
  		url: URL,
  		type:"POST",
  		data: JSON.stringify({relatedOrgIds: relatedOrgs}),
  		contentType: "application/json; charset=utf-8",
  		dataType:"json"
  })
	return {
		type: 'JOIN_ORG',
		payload: request
	}

}

export default joinOrganizations
