import { combineReducers } from 'redux'
import userReducer from './userReducer'
import listingReducer from './listingReducer'
import authenticationReducer from './authenticationReducer'
import orgReducer from './organizationReducer'
import searchReducer from './searchReducer'
import {reducer as formReducer} from 'redux-form'

const Reducers = combineReducers({
  user: userReducer,
  form:formReducer,
  listing: listingReducer,
  authentication: authenticationReducer,
  orgs: orgReducer,
  search: searchReducer
	})
export default Reducers
