import { all, take, takeLatest } from 'redux-saga/effects';
import {
  signUp as SIGN_UP,
  logIn as LOG_IN,
  fetchCourses as FETCH_COURSES,
} from '../actions';
import { getCourses } from './courses';
import { login } from './login';
import { signUp } from './register';

export default function* sagas() {
  yield all([
    takeLatest(SIGN_UP, signUp),
    takeLatest(LOG_IN, login),
    takeLatest(FETCH_COURSES, getCourses),
  ])
}