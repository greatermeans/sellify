const userReducer = (state={}, action)=>{
	switch(action.type){
		case 'ADD_USER':
		debugger
			return Object.assign({}, state, {user: action.payload })
		case 'USER_LOGIN':
			debugger
			return Object.assign({}, state, {user: action.payload})
		default:
			return state
	}

}

export default userReducer
