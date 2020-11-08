import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  createingRoom: false,
  createingRoomFailed: false,
  createingRoomSuccess: false,
}

export default handleActions({
  CREATE_ROOM: (state) => ({
    ...state,
    createingRoom: true,
    createingRoomFailed: false,
    createingRoomSuccess: false,
  }),
  CREATE_ROOM_FAILED: (state) => ({
    ...state,
    createingRoom: false,
    createingRoomFailed: true,
    createingRoomSuccess: false,
  }),
  CREATE_ROOM_SUCCESS: (state) => ({
    ...state,
    createingRoom: false,
    createingRoomFailed: false,
    createingRoomSuccess: true,
  })
}, INITIAL_STATE)
