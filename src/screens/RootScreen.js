import React from 'react';
import { ContainerView } from '../components/ContainerView/ContainerView';
import { Root } from '../components/RootScreen/Root';

const RootScreen = ({ navigation }) => (
  <ContainerView>
    <Root navigation={navigation}/>
  </ContainerView>
);

export { RootScreen };