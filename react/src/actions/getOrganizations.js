import axios from 'axios'

function getOrganizations() {

	let request = axios.get('http://localhost:3000/api/v1/organizations/')
	return {
		type: 'GET_ORG',
		payload: request
	}
  }

export default getOrganizations
