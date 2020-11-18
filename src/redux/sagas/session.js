import { put } from 'redux-saga/effects'
import { get } from '../../api'
import { requestAuthorizationFailed, requestAuthorizationSuccess } from '../actions';

export function* requestAuthorization() {
  try {
    const response = yield get('users/authorization');
    const { isValid, success, message } = response;
    if (isValid && success) {
      yield put(requestAuthorizationSuccess());
    } else {
      yield put(requestAuthorizationFailed());
    }
  } catch (error) {
    yield put(requestAuthorizationFailed());
  }
}