const searchReducer = (state=[], action)=>{
	switch(action.type){
		case 'SEARCH':
			return state.concat(action.payload)
		default:
			return state
	}

}

export default searchReducer
