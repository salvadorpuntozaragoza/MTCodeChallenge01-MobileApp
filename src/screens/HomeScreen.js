import React from 'react';
import { Home } from '../components/HomeScreen/Home';
import { ContainerView } from '../components/ContainerView/ContainerView';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  const store = useSelector(({ coursesTakenReducer }) => coursesTakenReducer);
  const dispatch = useDispatch();
  
  return (
    <ContainerView>
      <Home
        navigation={navigation}
        store={store}
        dispatch={dispatch}
      />
    </ContainerView>
  );
}

export { HomeScreen };
