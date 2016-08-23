import axios from 'axios';

//Organization list
export const FETCH_ORGANIZATIONS = 'FETCH_ORGANIZATIONS';
export const FETCH_ORGANIZATIONS_SUCCESS = 'FETCH_ORGANIZATIONS_SUCCESS';
export const FETCH_ORGANIZATIONS_FAILURE = 'FETCH_ORGANIZATIONS_FAILURE';
export const RESET_ORGANIZATIONS = 'RESET_ORGANIZATIONS';

//Fetch organization
export const FETCH_ORGANIZATION = 'FETCH_ORGANIZATION';
export const FETCH_ORGANIZATION_SUCCESS = 'FETCH_ORGANIZATION_SUCCESS';
export const FETCH_ORGANIZATION_FAILURE = 'FETCH_ORGANIZATION_FAILURE';
export const RESET_ACTIVE_ORGANIZATION = 'RESET_ACTIVE_ORGANIZATION';

//Join organization
export const JOIN_ORGANIZATION = 'JOIN_ORGANIZATION';
export const JOIN_ORGANIZATION_SUCCESS = 'JOIN_ORGANIZATION_SUCCESS';
export const JOIN_ORGANIZATION_FAILURE = 'JOIN_ORGANIZATION_FAILURE';

//Quit organization
export const QUIT_ORGANIZATION = 'QUIT_ORGANIZATION';
export const QUIT_ORGANIZATION_SUCCESS = 'QUIT_ORGANIZATION_SUCCESS';
export const QUIT_ORGANIZATION_FAILURE = 'QUIT_ORGANIZATION_FAILURE';

const ROOT_URL = 'http://localhost:3000/api/v1'

export function fetchOrganizations() {
  debugger
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/organizations`,
    headers: {Authorization: sessionStorage.jwtToken}
  });
  debugger
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