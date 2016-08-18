import $ from 'jquery'
import userLogin from '../actions/userLogin'

export function authorizeUser(formProps){
	debugger
  return function(dispatch){
  	const { email, password } = formProps
  	debugger
    $.ajax({
    url: 'http://localhost:3000/user_token',
    type:"POST",
    data: JSON.stringify({auth: {email: email, password: password}}),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
    }).done((response)=> {
    	debugger
      localStorage.setItem('token', response.auth.token)
      userLogin(dispatch, {id: response.user.id})
      dispatch({type: 'CHANGE_AUTH', payload: true})
    }).catch(()=> {
    	debugger
      dispatch(authError('You suck'))
    })
  }
}

function authError(msg){
  return {
    type: 'AUTH_ERROR',
    payload: msg
  };
}