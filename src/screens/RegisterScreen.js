import React from 'react';
import { ContainerView } from '../components/ContainerView/ContainerView';
import { Register } from '../components/RegisterScreen/Register';

const RegisterScreen = ({ navigation }) => (
  <ContainerView>
    <Register navigation={navigation}/>
  </ContainerView>
);

export { RegisterScreen };
