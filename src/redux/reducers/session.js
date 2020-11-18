import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  sessionData: {},
  hasData: false,
  requestingAuthorization: true,
  requestingAuthorizationFailed: false,
  requestingAuthorizationSuccess: false,
  authorized: null,
}

export default handleActions({
  STORE_CREDENTIALS: (state, { payload }) => ({
    ...state,
    sessionData: payload,
    hasData: true,
  }),
  REMOVE_CREDENTIALS: (state, { payload }) => ({
    ...state,
    sessionData: {},
    hasData: false,
  }),
  REQUEST_AUTHORIZATION: (state, { payload }) => ({
    ...state,
    requestingAuthorization: true,
    requestingAuthorizationFailed: false,
    requestingAuthorizationSuccess: false,
  }),
  REQUEST_AUTHORIZATION_FAILED: (state, { payload }) => ({
    ...state,
    authorized: false,
    requestingAuthorization: false,
    requestingAuthorizationFailed: true,
    requestingAuthorizationSuccess: false,
  }),
  REQUEST_AUTHORIZATION_SUCCESS: (state, { payload }) => ({
    ...state,
    authorized: true,
    requestingAuthorization: false,
    requestingAuthorizationFailed: false,
    requestingAuthorizationSuccess: true,
  }),
}, INITIAL_STATE);
