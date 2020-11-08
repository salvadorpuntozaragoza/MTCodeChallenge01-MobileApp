import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  sessionData: {}
}

export default handleActions({
  STORE_CREDENTIALS: (state, { payload }) => ({
    ...state,
    sessionData: payload,
  }),
  REMOVE_CREDENTIALS: (state, { payload }) => ({
    ...state,
    sessionData: {}
  })
}, INITIAL_STATE);
