import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  fetchingCourses: false,
  courses: [],
  fetchCoursesFailed: false,
  fetchCoursesSuccess: false,
};

export default handleActions({
  FETCH_COURSES: (state, { payload }) => ({
    ...state,
    fetchingCourses: true,
    courses: [],
    fetchCoursesFailed: false,
    fetchCoursesSuccess: false,
  }),
  FETCH_COURSES_FAILED: (state, { payload }) => ({
    ...state,
    fetchingCourses: false,
    courses: [],
    fetchCoursesFailed: true,
    fetchCoursesSuccess: false,
  }),
  FETCH_COURSES_SUCCESS: (state, { payload }) => {
    console.log('Dispathcing fetch success: ', payload);
    return {...state,
    fetchingCourses: false,
    courses: payload,
    fetchCoursesFailed: false,
    fetchCoursesSuccess: true,}
  },
}, INITIAL_STATE);