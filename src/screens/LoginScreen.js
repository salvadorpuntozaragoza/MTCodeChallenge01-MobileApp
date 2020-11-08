import React from 'react';
import { ContainerView } from '../components/ContainerView/ContainerView';
import { Login } from '../components/LoginScreen/Login'

class LoginScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerView>
        <Login navigation={this.props.navigation}/>
      </ContainerView>
    );
  }
}

export { LoginScreen };