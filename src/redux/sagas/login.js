import { put } from 'redux-saga/effects';
import { post } from "../../api";
import { saveItem } from "../../asyncStoreManager";
import { logInFailed, logInSuccess, storeCredentials } from "../actions";


export function* login({ payload }) {
  try{
    const response = yield post('users/login', payload.data);
    const { data, isValid, message, success, token } = response;
    if (success && isValid) {
      yield put(logInSuccess());
      yield put(storeCredentials({ ...data, token }));
      yield saveItem('session', { ...data, token });
      payload.navigation.navigate("Public");
    } else {
      console.log('Entered fail if with message: ', message);
      yield put(logInFailed(message || ''));
      console.log("Yield action dispatched");
    }
    console.log("The response was: ", response);
  } catch(error) {
    console.log(error);
    yield put(logInFailed(message || ''));
  }
}