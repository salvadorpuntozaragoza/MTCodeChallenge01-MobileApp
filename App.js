import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { initializeStore } from './src/redux/sagas/store'
import { AppRouter } from './src/AppRouter';

const App = () => (
  <Provider store={initializeStore()}>
    <AppRouter />
  </Provider>
)

export default App;
