import React from 'react';
import {  } from 'react-native';
import { ContainerView } from '../components/ContainerView/ContainerView';
import { Profile } from '../components/ProfileScreen/profile';

const ProfileScreen = ({ navigation }) => (
  <ContainerView>
    <Profile navigation={navigation}/>
  </ContainerView>
);

export { ProfileScreen };
