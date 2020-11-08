import { createActions } from 'redux-actions';

const actions = createActions({
  ADD_COURSE_TAKEN: (data) => data,
  ADD_COURSE_TAKEN_FAILED: (data) => data,
  ADD_COURSE_TAKEN_SUCCESS: (data) => data,
});

export const {
  addCourseTaken,
  addCourseTakenFailed,
  addCourseTakenSuccess,
} = actions;
