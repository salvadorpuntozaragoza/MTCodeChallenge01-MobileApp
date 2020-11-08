import { createActions } from 'redux-actions';

const actions = createActions({
  LOG_IN: (data) => data,
  LOG_IN_FAILED: (data) => data,
  LOG_IN_SUCCESS: () => {},
});

export const {
  logIn,
  logInFailed,
  logInSuccess,
} = actions;
