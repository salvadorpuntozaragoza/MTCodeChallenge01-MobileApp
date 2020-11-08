import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Home } from '../components/HomeScreen/Home';
import { ContainerView } from '../components/ContainerView/ContainerView';

class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerView>
        <Home navigation={this.props.navigation}/>
      </ContainerView>
    );
  }
}

export { HomeScreen };
