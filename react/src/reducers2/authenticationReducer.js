const authentication =  function(state = {authenticated: false, error: ''}, action){
  
  switch(action.type){
    case 'CHANGE_AUTH':
      return {authenticated: action.payload, error: ''};
    case 'AUTH_ERROR':
      return { ...state, error: action.payload };
    default: 
      return state;
  }
}

export default authentication;