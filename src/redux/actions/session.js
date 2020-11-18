import { createActions } from 'redux-actions';

const actions = createActions({
  STORE_CREDENTIALS: (data) => data,
  REMOVE_CREDENTIALS: (data) => data,
  REQUEST_AUTHORIZATION: (data) => data,
  REQUEST_AUTHORIZATION_FAILED: (data) => data,
  REQUEST_AUTHORIZATION_SUCCESS: (data) => data,
})

export const {
  storeCredentials,
  removeCredentials,
  requestAuthorization,
  requestAuthorizationFailed,
  requestAuthorizationSuccess,
} = actions;
