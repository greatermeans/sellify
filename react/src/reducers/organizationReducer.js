const orgReducer = (state={}, action)=>{
	switch(action.type){
		case 'GET_ORG':
			debugger
			return Object.assign({}, state, {orgs: action.payload })
		default:
			return state
	}

}

export default orgReducer
