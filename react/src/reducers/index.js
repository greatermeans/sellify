import { combineReducers } from 'redux';
import ListingsReducer from './reducer_listings';
import UserReducer from './reducer_user';
import ValidateUserFieldsReducer from './reducer_validateUserFields';
import UpdateAccountReducer from './reducer_updateAccount';
import OrganizationsReducer from './reducer_organizations';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  validateFields: ValidateUserFieldsReducer,
  listings: ListingsReducer,
  form: formReducer,
  updateAccount: UpdateAccountReducer,
  organizations: OrganizationsReducer
});

export default rootReducer;
