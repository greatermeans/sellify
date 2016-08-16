import { combineReducers } from 'redux'
import userReducer from './userReducer'
import sellerReducer from './sellerReducer'
import listingReducer from './listingReducer'
import authenticateReducer from './authenticateReducer'
import orgReducer from './organizationReducer'
import {reducer as formReducer} from 'redux-form'

const Reducers = combineReducers({
  user: userReducer,
  form:formReducer,
  listing: listingReducer,
  authenticate: authenticateReducer,
  orgs: orgReducer
	})
export default Reducers
