const userReducer = (state={}, action)=>{
	switch(action.type){
		case 'ADD_USER':
			return Object.assign({}, state, action.payload)
		case 'USER_LOGIN':
<<<<<<< Updated upstream
			return Object.assign({}, state, action.payload)
=======
		debugger
			return Object.assign({}, state, {user: action.payload})
>>>>>>> Stashed changes

		default:
			return state
	}

}

export default userReducer
