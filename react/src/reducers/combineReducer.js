import { combineReducers } from 'redux'
import userReducer from './userReducer'
import sellerReducer from './sellerReducer'
import listingReducer from './listingReducer'
import authenticateReducer from './authenticateReducer'

import {reducer as formReducer} from 'redux-form'

const Reducers = combineReducers({
  user: userReducer,
  form:formReducer,
  listing: listingReducer,
  authenticate: authenticateReducer})
export default Reducers
