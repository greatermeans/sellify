import { combineReducers } from 'redux'
import userReducer from './user_reducer'
import sellerReducer from './seller_reducer'
import listingReducer from './listing_reducer'

const combineReducer = combineReducers({users:userReducer})
export default combineReducer

// ,sellers:sellerReducer, listings:listingReducer