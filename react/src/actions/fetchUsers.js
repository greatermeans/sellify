import axios from 'axios'

function fetchUsers() {
	var request = 'i'

	axios.get(request)
	.then(function (response) {

    console.log(response);
  })
}

export default fetchUsers
