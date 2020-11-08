import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  signingUp: false,
  signUpSuccess: false,
  signUpFailed: false,
  message: '',
}

export default handleActions({
  SIGN_UP: (state, { payload }) => ({
    ...state,
    signingUp: true,
    signUpFailed: false,
    signUpSuccess: false,
  }),
  SIGN_UP_FAILED: (state,  { payload }) => ({
    ...state,
    signingUp: false,
    signUpFailed: true,
    signUpSuccess: false,
    message: payload,
  }),
  SIGN_UP_SUCCESS: (state, { payload }) => ({
    ...state,
    signingUp: false,
    signUpFailed: false,
    signUpSuccess: true,
  })
}, INITIAL_STATE);
