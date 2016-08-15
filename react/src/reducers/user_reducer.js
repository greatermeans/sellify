const userReducer = (state=null, action)=>{
	switch(action.type){
		case 'ADD_USER':
			debugger
			return Object.assign({}, state, {users:[...state.users,{payload:action.payload
		}]})
		default:
			return state
	}

}

export default userReducer