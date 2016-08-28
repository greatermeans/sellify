import {JOIN_ORGANIZATIONS,
	FETCH_ORGANIZATIONS,FETCH_ORGANIZATIONS_SUCCESS,  FETCH_ORGANIZATIONS_FAILURE,
	FETCH_ORGANIZATION, FETCH_ORGANIZATION_SUCCESS,  FETCH_ORGANIZATION_FAILURE, RESET_ACTIVE_ORGANIZATION,
	CREATE_ORGANIZATION, CREATE_ORGANIZATION_SUCCESS, CREATE_ORGANIZATION_FAILURE, RESET_NEW_ORGANIZATION,
	DELETE_ORGANIZATION, DELETE_ORGANIZATION_SUCCESS, DELETE_ORGANIZATION_FAILURE, RESET_DELETED_ORGANIZATION,
  VALIDATE_ORGANIZATION_FIELDS,VALIDATE_ORGANIZATION_FIELDS_SUCCESS, VALIDATE_ORGANIZATION_FIELDS_FAILURE, RESET_ORGANIZATION_FIELDS
} from '../actions/organizations';


	const INITIAL_STATE = {
							joinedOrgs: {organizations:[],error:null, loading:false},
							organizationsList: {organizations: [], error:null, loading: false},
							newOrganization:{organization:null, error: null, loading: false},
							activeOrganization:{organization:null, error:null, loading: false},
							deletedOrganization: {organization: null, error:null, loading: false},
						};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
	case JOIN_ORGANIZATIONS:
		return { ...state, joinedOrgs: {organizations:[],error:null,loading:false}}
  case FETCH_ORGANIZATIONS:
		return { ...state, organizationsList: {organizations:[], error: null, loading: true} };
	case FETCH_ORGANIZATIONS_SUCCESS:
		return { ...state, organizationsList: {organizations:action.payload.data, error: null, loading: false} };
	case FETCH_ORGANIZATIONS_FAILURE:
		error = action.payload.data || {message: action.payload.message};
		return { ...state, organizationsList: {organization: null, error:error, loading:false}};

  case FETCH_ORGANIZATION:
    return { ...state, activeOrganization:{...state.activeOrganization, loading: true}};
  case FETCH_ORGANIZATION_SUCCESS:
    return { ...state, activeOrganization: {organization: action.payload.data, error:null, loading: false}};
  case FETCH_ORGANIZATION_FAILURE:
    error = action.payload.data || {message: action.payload.message}
    return { ...state, activeOrganization: {organization: null, error:error, loading:false}};
  case RESET_ACTIVE_ORGANIZATION:
    return { ...state, activeOrganization: {organization: null, error:null, loading: false}};

  case CREATE_ORGANIZATION:
  	return {...state, newOrganization: {...state.newOrganization, loading: true}}
  case CREATE_ORGANIZATION_SUCCESS:
  	return {...state, newOrganization: {organization:action.payload.data, error:null, loading: false}}
  case CREATE_ORGANIZATION_FAILURE:
    error = action.payload.data || {message: action.payload.message}
  	return {...state, newOrganization: {organization:null, error:error, loading: false}}
  case RESET_NEW_ORGANIZATION:
  	return {...state,  newOrganization:{organization:null, error:null, loading: false}}


  case DELETE_ORGANIZATION:
   	return {...state, deletedOrganization: {...state.deletedOrganization, loading: true}}
  case DELETE_ORGANIZATION_SUCCESS:
  	return {...state, deletedOrganization: {organization:action.payload.data, error:null, loading: false}}
  case DELETE_ORGANIZATION_FAILURE:
    error = action.payload.data || {message: action.payload.message}
  	return {...state, deletedOrganization: {organization:null, error:error, loading: false}}
  case RESET_DELETED_ORGANIZATION:
  	return {...state,  deletedOrganization:{organization:null, error:null, loading: false}}

  case VALIDATE_ORGANIZATION_FIELDS:
    return {...state, newOrganization:{...state.newOrganization, error: null, loading: true}}
  case VALIDATE_ORGANIZATION_FIELDS_SUCCESS:
    return {...state, newOrganization:{...state.newOrganization, error: null, loading: false}}
  case VALIDATE_ORGANIZATION_FIELDS_FAILURE:
    let result = action.payload.data;
    if(!result) {
      error = {message: action.payload.message};
    } else {
      error = {title: result.title, categories: result.categories, description: result.description};
    }
    return {...state, newOrganization:{...state.newOrganization, error: error, loading: false}}
  case RESET_ORGANIZATION_FIELDS:
    return {...state, newOrganization:{...state.newOrganization, error: null, loading: null}}
  default:
    return state;
  }
}
