import { combineReducers } from 'redux'
import userReducer from './userReducer'
import listingReducer from './listingReducer'
import authenticationReducer from './authenticationReducer'
import orgReducer from './organizationReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  user: userReducer,
  form:formReducer,
  listing: listingReducer,
  authentication: authenticationReducer,
  orgs: orgReducer
	})
export default rootReducer
