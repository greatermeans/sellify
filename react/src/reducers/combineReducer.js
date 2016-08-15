import { combineReducers } from 'redux'
import userReducer from './userReducer'
import sellerReducer from './sellerReducer'
import listingReducer from './listingReducer'
import {reducer as formReducer} from 'redux-form'

const Reducers = combineReducers({users:userReducer, form:formReducer})
export default Reducers
