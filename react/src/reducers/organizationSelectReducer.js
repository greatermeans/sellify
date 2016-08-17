const selectOrganization = (state=[], action)=>{
switch(action.type){
  case 'SELECT_ORGANIZATION':
    return state.concat(action.payload.data)
  default:
    return state
}
}
export default selectOrganization
