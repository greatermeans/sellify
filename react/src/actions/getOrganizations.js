import axios from 'axios'

function getOrganizations() {
	var request = 'http://localhost:3000/api/v1/organizations/'

	axios.get(request)
  }

export default getOrganizations
