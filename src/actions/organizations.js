import axios from 'axios';
import $ from 'jquery'


export const FETCH_ORGANIZATIONS = 'FETCH_ORGANIZATIONS';
export const FETCH_ORGANIZATIONS_SUCCESS = 'FETCH_ORGANIZATIONS_SUCCESS';
export const FETCH_ORGANIZATIONS_FAILURE = 'FETCH_ORGANIZATIONS_FAILURE';


export const FETCH_ORGANIZATION = 'FETCH_ORGANIZATION';
export const FETCH_ORGANIZATION_SUCCESS = 'FETCH_ORGANIZATION_SUCCESS';
export const FETCH_ORGANIZATION_FAILURE = 'FETCH_ORGANIZATION_FAILURE';
export const RESET_ACTIVE_ORGANIZATION = 'RESET_ACTIVE_ORGANIZATION';


export const JOIN_ORGANIZATIONS = 'JOIN_ORGANIZATIONS';
export const JOIN_ORGANIZATION_SUCCESS = 'JOIN_ORGANIZATION_SUCCESS';
export const JOIN_ORGANIZATION_FAILURE = 'JOIN_ORGANIZATION_FAILURE';


export const QUIT_ORGANIZATION = 'QUIT_ORGANIZATION';
export const QUIT_ORGANIZATION_SUCCESS = 'QUIT_ORGANIZATION_SUCCESS';
export const QUIT_ORGANIZATION_FAILURE = 'QUIT_ORGANIZATION_FAILURE';

const ROOT_URL = 'https://sellify-api.herokuapp.com/api/v1'

export function fetchOrganizations() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/organizations`,
    headers: {Authorization: sessionStorage.jwtToken}
  });
  return {
    type: FETCH_ORGANIZATIONS,
    payload: request
  };
}

export function fetchOrganizationsSuccess(organizations) {
  return {
    type: FETCH_ORGANIZATIONS_SUCCESS,
    payload: organizations
  };
}

export function fetchOrganizationsFailure(error) {
  return {
    type: FETCH_ORGANIZATIONS_FAILURE,
    payload: error
  };
}

export function fetchOrganization(id) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/organizations/${id}`,
    headers: {Authorization: sessionStorage.jwtToken}
  });

  return {
    type: FETCH_ORGANIZATION,
    payload: request
  };
}

export function fetchOrganizationSuccess(activeOrganization) {
  return {
    type: FETCH_ORGANIZATION_SUCCESS,
    payload: activeOrganization
  };
}

export function fetchOrganizationFailure(error) {
  return {
    type: FETCH_ORGANIZATION_FAILURE,
    payload: error
  };
}

export function resetActiveOrganization() {
  return {
    type: RESET_ACTIVE_ORGANIZATION
  }
};


export function joinOrganizations(orgsAndUser) {
  let orgIds = orgsAndUser.selectedOrganizations.map((org)=>{return org.value})
  const request = axios.post(`${ROOT_URL}/users/${orgsAndUser.currentUser}/join_org`,
    {orgIds: orgIds},
    {headers: {Authorization: sessionStorage.jwtToken}});


	return {
		type: 'JOIN_ORGANIZATIONS',
		payload: request
	}
}
