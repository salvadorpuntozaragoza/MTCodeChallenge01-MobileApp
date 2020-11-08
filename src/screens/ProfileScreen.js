import React from 'react';
import {  } from 'react-native';
import { ContainerView } from '../components/ContainerView/ContainerView';
import { Profile } from '../components/ProfileScreen/profile';

class ProfileScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerView>
        <Profile navigation={this.props.navigation}/>
      </ContainerView>
    );
  }
}

export { ProfileScreen };
