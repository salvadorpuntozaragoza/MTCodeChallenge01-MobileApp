import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  addingCourseTaken: false,
  addCourseTakenFailed: false,
  addCourseTakenSuccess: false,
  gettingCoursesTaken: false,
  gettingCoursesTakenFailed: false,
  gettingCoursesTakenSuccess: false,
  updatingCourseTaken: false,
  updatingCourseTakenFailed: false,
  updatingCourseTakenSuccess: false,
  deletingCourseTaken: false,
  deletingCourseTakenFailed: false,
  deletingCourseTakenSuccess: false,
  coursesTaken: [],
  userCoursesTaken: [],
  filterResults: [],
  showSearchResults: false,
  errorMessage: '',
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
    userCoursesTaken: [
      ...state.userCoursesTaken,
      payload,
    ]
  }),
  GET_COURSES_TAKEN: (state, { payload }) => ({
    ...state,
    gettingCoursesTaken: true,
    gettingCoursesTakenFailed: false,
    gettingCoursesTakenSuccess: false,
  }),
  GET_COURSES_TAKEN_FAILED: (state, { payload }) => ({
    ...state,
    gettingCoursesTaken: false,
    gettingCoursesTakenFailed: true,
    gettingCoursesTakenSuccess: false,
    errorMessage: payload,
  }),
  GET_COURSES_TAKEN_SUCCESS: (state, { payload }) => ({
    ...state,
    gettingCoursesTaken: false,
    gettingCoursesTakenFailed: false,
    gettingCoursesTakenSuccess: true,
    coursesTaken: payload,
  }),
  UPDATE_COURSE_TAKEN: (state, { payload }) => ({
    ...state,
    updatingCourseTaken: true,
    updatingCourseTakenFailed: false,
    updatingCourseTakenSuccess: false,
  }),
  UPDATE_COURSE_TAKEN_FAILED: (state, { payload }) => ({
    ...state,
    updatingCourseTaken: false,
    updatingCourseTakenFailed: true,
    updatingCourseTakenSuccess: false,
    errorMessage: payload
  }),
  UPDATE_COURSE_TAKEN_SUCCESS: (state, { payload }) => ({
    ...state,
    updatingCourseTaken: false,
    updatingCourseTakenFailed: false,
    updatingCourseTakenSuccess: true,
    coursesTaken: state.coursesTaken.map((item) => {
      if(item._id === payload._id) {
        return payload;
      } else {
        return item;
      }
    }),
  }),
  DELETE_COURSE_TAKEN: (state, { payload }) => ({
    ...state,
    deletingCourseTaken: false,
    deletingCourseTakenFailed: false,
    deletingCourseTakenSuccess: false,
  }),
  DELETE_COURSE_TAKEN_FAILED: (state, { payload }) => ({
    ...state,
    deletingCourseTaken: false,
    deletingCourseTakenFailed: false,
    deletingCourseTakenSuccess: false,
    errorMessage: payload,
  }),
  DELETE_COURSE_TAKEN_SUCCESS: (state, { payload }) => ({
    ...state,
    deletingCourseTaken: false,
    deletingCourseTakenFailed: false,
    deletingCourseTakenSuccess: false,
    coursesTaken: state.coursesTaken.filter((item) => (item._id !== payload._id)),
  }),
  FILTER_COURSES: (state, { payload }) => ({
    ...state,
    showSearchResults: true,
    filterResults: state.coursesTaken.filter((item) => {
      if(payload.filterBy === 'User') {
        if(item.userName.toLowerCase().includes(payload.searchText.toLowerCase())) {
          return item;
        }
      } else if(payload.filterBy === 'Course') {
        if(item.courseName.toLowerCase().includes(payload.searchText.toLowerCase())) {
          return item;
        }
      }
    })
  }),
  FILTER_COURSES_RESET: (state, { payload }) => ({
    ...state,
    filterResults: [],
    showSearchResults: false,
  })
}, INITIAL_STATE);