import { createActions } from 'redux-actions';

const actions = createActions({
  CREATE_ROOM: (data) => data,
  CREATE_ROOM_FAILED: () => { },
  CREATE_ROOM_SUCCESS: (data) => data,
});

export const {
  createRoom,
  createRoomFailed,
  createRoomSuccess,
} = actions;