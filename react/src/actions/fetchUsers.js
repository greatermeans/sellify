import axios from 'axios'

function fetchUsers() {
	var request = 'http://localhost:3000/api/v1/users/12/listings'

	axios.get(request)
	.then(function (response) {
		debugger
    console.log(response);
  })
}

export default fetchUsers