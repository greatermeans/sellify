import { combineReducers } from 'redux';
import ListingsReducer from './reducer_listings';
import UserReducer from './reducer_user';
import ValidateUserFieldsReducer from './reducer_validateUserFields';
import ResendEmailReducer from './reducer_resendEmail';
import UpdateEmailReducer from './reducer_updateEmail';
import SearchReducer from './reducer_search';
import OrganizationsReducer from './reducer_organizations';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  validateFields: ValidateUserFieldsReducer,
  listings: ListingsReducer, //<-- Listings
  form: formReducer, // <-- redux-form
  resendEmail: ResendEmailReducer,
  updateEmail: UpdateEmailReducer,
  search: SearchReducer
  organizations: OrganizationsReducer,
});

export default rootReducer;
