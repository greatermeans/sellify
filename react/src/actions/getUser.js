import axios from 'axios'

function getUser(params) {
	var request = `http://localhost:3000/api/v1/users/${params}/`

	axios.get(request)
	.then(function (response) {
    console.log(response);
  })
}

export default getUser
