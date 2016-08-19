const listingReducer = (state={}, action)=>{
	switch(action.type){
		case 'ADD_LISTING':
			return Object.assign({}, state, action.payload)
		case 'VIEW_LISTING':
			return Object.assign({}, state, action.payload)
		default:
			return state
	}

}

export default listingReducer
