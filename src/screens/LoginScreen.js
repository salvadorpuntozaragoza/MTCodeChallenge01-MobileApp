import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerView } from '../components/ContainerView/ContainerView';
import { Login } from '../components/LoginScreen/Login'

const LoginScreen = ({ navigation }) => {
  const store = useSelector(({ loginReducer, sessionReducer }) => ({loginReducer, sessionReducer}));
  const dispatch = useDispatch();
  
  return (
    <ContainerView>
      <Login
        navigation={navigation}
        store={store}
        dispatch={dispatch}
      />
    </ContainerView>
  );
}

export { LoginScreen };