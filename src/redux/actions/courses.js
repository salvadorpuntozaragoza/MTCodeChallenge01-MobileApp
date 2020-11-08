import { createActions } from 'redux-actions';

const actions = createActions({
  FETCH_COURSES: () => {},
  FETCH_COURSES_FAILED: () => {},
  FETCH_COURSES_SUCCESS: (data) => data
});

export const {
  fetchCourses,
  fetchCoursesFailed,
  fetchCoursesSuccess,
} = actions;