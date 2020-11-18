import { put } from 'redux-saga/effects'
import { get, post, patch, del } from '../../api';
import {
  addCourseTakenFailed,
  addCourseTakenSuccess,
  deleteCourseTakenFailed,
  deleteCourseTakenSuccess,
  getCoursesTakenFailed,
  getCoursesTakenSuccess,
  updateCourseTakenFailed,
  updateCourseTakenSuccess
} from '../actions';

export function* getCoursesTaken({ payload }) {
  try {
    const response = yield get('coursesTaken');
    console.log("Courses taken response: ", response);
    const { data, isValid, success, message } = response;
    if (success && isValid) {
      yield put(getCoursesTakenSuccess(data));
    } else {
      yield put(getCoursesTakenFailed(message || ''));
    }
  } catch (error) {
    console.log("Course taken error: ", error);
    yield put(getCoursesTakenFailed(message || ''));
  }
}

export function* addCourseTaken({ payload }) {
  try {
    const response = yield post('coursesTaken', payload);
    const { data, isValid, success, message } = response;
    console.log("Add course taken response: ", response);
    if (success && isValid) {
      yield put(addCourseTakenSuccess(data));
    } else {
      yield put(addCourseTakenFailed(message || ''));
    }
  } catch (error) {
    console.log("Add course taken error: ", error);
    yield put(addCourseTakenFailed(message || ''));
  }
}

export function* updateCourseTaken({ payload }) {
  try {
    const response = yield patch(`coursesTaken/${payload._id}`, payload);
    const { data, isValid, success, message } = response;
    console.log("Update course taken response: ", response);

    if (isValid && success) {
      yield put(updateCourseTakenSuccess(payload));
    } else {
      yield put(updateCourseTakenFailed(message || ''));
    }
  } catch (error) {
    console.log("Update course taken error: ", error);
    yield put(updateCourseTakenFailed(message || ''));
  }
}

export function* deleteCourseTaken({ payload }) {
  try {
    const response = yield del(`coursesTaken/${payload._id}`);
    const { data, isValid, success, message } = response;
    console.log("Delete course taken response: ", response);

    if (isValid && success) {
      yield put(deleteCourseTakenSuccess(payload));
    } else {
      yield put(deleteCourseTakenFailed(message || ''));
    }
  } catch (error) {
    console.log("Delete course taken error: ", error);
    yield put(deleteCourseTakenFailed(message || ''));
  }
}