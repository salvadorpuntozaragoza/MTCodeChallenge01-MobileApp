import { put } from 'redux-saga/effects'
import { get } from '../../api';
import { removeItem } from '../../asyncStoreManager';
import { fetchCoursesFailed, fetchCoursesSuccess, removeCredentials } from '../actions';

export function* getCourses() {
  try {
    const response = yield get('courses');
    const { data, isValid, success, message } = response;
    console.log("Courses response: ", response);
    if (isValid && success) {
      console.log('Valid courses: ', data);
      yield put(fetchCoursesSuccess(data));
    } else if (message === "Invalid/Expired token") {
      console.log("Catched expired token");
      yield removeItem('session');
      yield put(removeCredentials())
    } else {
      yield put(fetchCoursesFailed());
    }
  } catch (error) {
    console.log(error)
    yield put(fetchCoursesFailed());
  }
}