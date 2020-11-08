import { NavigationHelpersContext } from '@react-navigation/native';
import { call, put } from 'redux-saga/effects';
import { post } from '../../api';
import { saveItem } from '../../asyncStoreManager';
import { signUpFailed, signUpSuccess, storeCredentials } from '../actions';

export function* signUp({ payload }) {
  try {
    const response = yield post('users', payload.data);
    const { data, isValid, message, success, token } = response;
    if (isValid && success) {
      yield put(signUpSuccess());
      yield put(storeCredentials({ ...data, token })); // This goes to session store
      yield saveItem('session', { ...data, token }); // This goes to async storage
      payload.navigation.navigate("Public");
    } else {
      yield put(signUpFailed(message || ''));
    }
  } catch (error) {
    console.log(error);
    yield put(signUpFailed(message || ''));
  }
}