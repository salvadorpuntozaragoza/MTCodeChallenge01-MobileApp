import { createActions } from 'redux-actions';

const actions = createActions({
  STORE_CREDENTIALS: (data) => data,
  REMOVE_CREDENTIALS: (data) => data,
})

export const {
  storeCredentials,
  removeCredentials,
} = actions;
