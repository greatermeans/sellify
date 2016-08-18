const orgReducer = (state=[], action)=>{
	switch(action.type){
		case 'GET_ORG':
			return state.concat(action.payload.data)
		case 'JOIN_ORG':
			debugger
			return state
		default:
			return state
	}
}
export default orgReducer
