import axios from 'axios'

function addUser(user_data) {
	var request = 'http://localhost:3000/api/v1/users/'
	axios.post(request,user_data)
	.then(function (response) {
    console.log('saved successfully');
  })
}

export default fetchUsers