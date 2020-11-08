import { put } from 'redux-saga/effects'
import { get } from '../../api';
import { fetchCoursesFailed, fetchCoursesSuccess } from '../actions';

export function* getCourses() {
  try {
    const response = yield get('courses');
    const { data, isValid, success, message } = response;
    console.log("Courses response: ", response);
    if (isValid && success) {
      console.log('Valid courses: ', data);
      yield put(fetchCoursesSuccess(data));
    } else {
      yield put(fetchCoursesFailed());
    }
  } catch (error) {
    console.log(error)
    yield put(fetchCoursesFailed());
  }
}