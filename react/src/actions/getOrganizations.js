import $ from 'jquery'
function getOrganizations() {

	let request = $.ajax({
    url: 'http://localhost:3000/api/v1/organizations/',
    type:"GET",
    headers: { authorization: localStorage.getItem('token')}
  })

	return {
		type: 'GET_ORG',
		payload: request
	}
  }

export default getOrganizations

headers: { authorization: localStorage.getItem('token')}
