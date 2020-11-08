import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

const ContainerView = ({ children }) => (
  <KeyboardAvoidingView style={styles.container}>
    {children}
  </KeyboardAvoidingView>
);

export { ContainerView };