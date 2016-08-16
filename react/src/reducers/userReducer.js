const userReducer = (state=null, action)=>{
	switch(action.type){
		case 'ADD_USER':
			return Object.assign({}, state, {users:[...state.users,{payload:action.payload
		}]})
		case 'USER_LOGIN':
			return Object.assign({}, state, {user:action.payload})
		default:
			return state
	}

}

export default userReducer
