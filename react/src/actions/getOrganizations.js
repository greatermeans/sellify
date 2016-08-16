import axios from 'axios'

function getOrganizations() {
	var request = 'http://localhost:3000/api/v1/organizations/'

	let response = axios.get(request)

	return {
		type: 'GET_ORG',
		payload: response
	}
  }

export default getOrganizations
