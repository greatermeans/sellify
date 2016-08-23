const orgReducer = (state=[], action)=>{
	switch(action.type){
		case 'GET_ORG':
			return state.concat(action.payload)
		default:
			return state
	}
}
export default orgReducer
