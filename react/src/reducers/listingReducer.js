const listingReducer = (state={}, action)=>{
	switch(action.type){
		case 'ADD_LISTING':
		debugger
			return Object.assign({}, state, {listing: action.payload })
		default:
			return state
	}

}

export default listingReducer
