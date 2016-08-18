const selectOrganization = (state=[], action)=>{
switch(action.type){
  case 'SELECT_ORGANIZATION':
    return state.concat(action.payload.data)
    case: 'UNSELECT_ORGANIZATION':
    return state.slice
  default:
    return state
}
}
export default selectOrganization
