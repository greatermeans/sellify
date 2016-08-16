function authenticate(isLoggedIn){

  return {
    type: 'CHANGE_AUTH',
    payload: isLoggedIn
  }
}

export default authenticate;
