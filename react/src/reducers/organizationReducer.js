const orgReducer = (state=[], action)=>{
	switch(action.type){
		case 'GET_ORG':
			return state.concat(action.payload.data)
		default:
			return state
	}
}
export default orgReducer
