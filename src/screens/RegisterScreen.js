import React from 'react';
import { ContainerView } from '../components/ContainerView/ContainerView';
import { Register } from '../components/RegisterScreen/Register';

class RegisterScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerView>
        <Register navigation={this.props.navigation}/>
      </ContainerView>
    );
  }
}

export { RegisterScreen };