import $ from 'jquery'


export default function getUser(){

 const request = $.ajax({
  		url: 'http://localhost:3000/api/v1/users/',
  		type:"GET",
  		headers: { authorization: localStorage.getItem('token')}
  })
 
  return {
    type: 'USER_LOGIN', 
    payload: request
  }
}