import { all, take, takeLatest } from 'redux-saga/effects';
import {
  signUp as SIGN_UP,
  logIn as LOG_IN,
  fetchCourses as FETCH_COURSES,
  addCourseTaken as ADD_COURSE_TAKEN,
  getCoursesTaken as GET_COURSES_TAKEN,
  deleteCourseTaken as DELETE_COURSE_TAKEN,
  updateCourseTaken as UPDATE_COURSE_TAKEN,
  requestAuthorization as REQUEST_AUTHORIZATION,
} from '../actions';
import { getCourses } from './courses';
import {
  addCourseTaken,
  getCoursesTaken,
  updateCourseTaken,
  deleteCourseTaken
} from './courseTaken';
import { login } from './login';
import { signUp } from './register';
import { requestAuthorization } from './session';

export default function* sagas() {
  yield all([
    takeLatest(SIGN_UP, signUp),
    takeLatest(LOG_IN, login),
    takeLatest(FETCH_COURSES, getCourses),
    takeLatest(ADD_COURSE_TAKEN, addCourseTaken),
    takeLatest(GET_COURSES_TAKEN, getCoursesTaken),
    takeLatest(UPDATE_COURSE_TAKEN, updateCourseTaken),
    takeLatest(DELETE_COURSE_TAKEN, deleteCourseTaken),
    takeLatest(REQUEST_AUTHORIZATION, requestAuthorization)
  ])
}