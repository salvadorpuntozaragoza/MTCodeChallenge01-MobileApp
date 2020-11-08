import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  signinIn: false,
  signInFailed: false,
  signInSuccess: false,
  errorMessage: '',
};

export default handleActions({
  LOG_IN: (state, { payload }) => ({
    ...state,
    signinIn: true,
    signInFailed: false,
    signInSuccess: false,
    errorMessage: '',
  }),
  LOG_IN_FAILED: (state, { payload }) => ({
    ...state,
    signinIn: false,
    signInFailed: true,
    signInSuccess: false,
    errorMessage: payload,
  }),
  LOG_IN_SUCCESS: (state, { payload }) => ({
    ...state,
    signinIn: false,
    signInFailed: false,
    signInSuccess: true,
    errorMessage: '',
  }),
}, INITIAL_STATE);
