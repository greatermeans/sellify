const userReducer = (state={}, action)=>{
	switch(action.type){
		case 'ADD_USER':
			return Object.assign({}, state, {user: action.payload })
		case 'USER_LOGIN':
			return Object.assign({}, state, {user: action.payload})

		default:
			return state
	}

}

export default userReducer
