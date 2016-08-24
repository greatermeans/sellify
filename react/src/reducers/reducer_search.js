const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
	switch(action.type){
	case 'SEARCH':
	  return action.payload
	default:
		return state
	}
}
