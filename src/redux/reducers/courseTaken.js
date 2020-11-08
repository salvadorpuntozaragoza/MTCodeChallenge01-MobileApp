import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  addingCourseTaken: false,
  addCourseTakenFailed: false,
  addCourseTakenSuccess: false,
  coursesTaken: [],
}

export default handleActions({
  ADD_COURSE_TAKEN: (state, { payload }) => ({
    ...state,
    addingCourseTaken: true,
    addCourseTakenFailed: false,
    addCourseTakenSuccess: false,
  }),
  ADD_COURSE_TAKEN_FAILED: (state, { payload }) => ({
    ...state,
    addingCourseTaken: false,
    addCourseTakenFailed: true,
    addCourseTakenSuccess: false,
  }),
  ADD_COURSE_TAKEN_SUCCESS: (state, { payload }) => ({
    ...state,
    addingCourseTaken: false,
    addCourseTakenFailed: false,
    addCourseTakenSuccess: true,
    coursesTaken: [
      ...state.coursesTaken,
      payload
    ],
  }),
}, INITIAL_STATE);