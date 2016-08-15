import { combineReducers } from 'redux'
import userReducer from './userReducer'
import sellerReducer from './sellerReducer'
import listingReducer from './listingReducer'

const Reducers = combineReducers({users:userReducer})
export default Reducers