import { createActions } from 'redux-actions';

const actions = createActions({
  SIGN_UP: (data) => data,
  SIGN_UP_FAILED: (data) => data,
  SIGN_UP_SUCCESS: (data) => data,
});

export const {
  signUp,
  signUpFailed,
  signUpSuccess,
} = actions;
