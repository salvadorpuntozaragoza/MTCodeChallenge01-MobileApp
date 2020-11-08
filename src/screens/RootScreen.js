import React from 'react';
import { ContainerView } from '../components/ContainerView/ContainerView';
import { Root } from '../components/RootScreen/Root';

class RootScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerView>
        <Root navigation={this.props.navigation}/>
      </ContainerView>
    );
  }
}

export { RootScreen };