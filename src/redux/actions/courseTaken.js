import { createActions } from 'redux-actions';

const actions = createActions({
  ADD_COURSE_TAKEN: (data) => data,
  ADD_COURSE_TAKEN_FAILED: (data) => data,
  ADD_COURSE_TAKEN_SUCCESS: (data) => data,
  GET_COURSES_TAKEN: () => {},
  GET_COURSES_TAKEN_FAILED: (data) => data,
  GET_COURSES_TAKEN_SUCCESS: (data) => data,
  UPDATE_COURSE_TAKEN: (data) => data,
  UPDATE_COURSE_TAKEN_FAILED: (data) => data,
  UPDATE_COURSE_TAKEN_SUCCESS: (data) => data,
  DELETE_COURSE_TAKEN: (data) => data,
  DELETE_COURSE_TAKEN_FAILED: (data) => data,
  DELETE_COURSE_TAKEN_SUCCESS: (data) => data,
  FILTER_COURSES: (data) => data,
  FILTER_COURSES_RESET: (data) => data,
});

export const {
  addCourseTaken,
  addCourseTakenFailed,
  addCourseTakenSuccess,
  getCoursesTaken,
  getCoursesTakenFailed,
  getCoursesTakenSuccess,
  updateCourseTaken,
  updateCourseTakenFailed,
  updateCourseTakenSuccess,
  deleteCourseTaken,
  deleteCourseTakenFailed,
  deleteCourseTakenSuccess,
  filterCourses,
  filterCoursesReset,
} = actions;
