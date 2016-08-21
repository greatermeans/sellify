import $ from 'jquery'
import userLogin from './userLogin'

export function authorizeUser(formProps){
  return function(dispatch){
  	const { email, password } = formProps
    $.ajax({
    url: 'http://localhost:3000/user_token',
    type:"POST",
    data: JSON.stringify({auth: {email: email, password: password}}),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
    }).done((response)=> {
      localStorage.setItem('token', response.auth.token)
      userLogin(dispatch)
      dispatch({type: 'CHANGE_AUTH', payload: true})
    }).catch(()=> {
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