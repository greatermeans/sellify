import $ from 'jquery'
import { browserHistory } from 'react-router'


export default function userLogin(dispatch, userData){
    $.ajax({
  		url: `http://localhost:3000/api/v1/users/${userData.id}`,
  		type:"GET",
  		headers: { authorization: localStorage.getItem('token')}
  }).done((response)=> {
      dispatch({type: 'USER_LOGIN', payload: response})
      if (response.organizations.length > 0) {
      	browserHistory.push('/dashboard')
      } else {
      	browserHistory.push('/organizations')
      }
  	})
}