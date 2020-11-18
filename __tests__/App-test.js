/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { keyExtractor, validateEmail } from '../src/utils';
import { Root } from '../src/components/RootScreen/Root'
import { Login } from '../src/components/LoginScreen/Login';
import { Register } from '../src/components/RegisterScreen/Register';

test('Root screen renders correctly', () => {
  const tree = renderer.create(<Root />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Login screen renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Register screen renders correctly', () => {
  const tree = renderer.create(<Register />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Test that keyExtractor function returns an index as string', () => {
  expect(keyExtractor("", 2)).toBe("2");
});

test('Test that szaragoza@arkusnexus.com is a valid email', () => {
  expect(validateEmail("szaragoza@arkusnexus.com")).toBe(true);
});

test('Test that zaragoza.arkusnexu.com is an invalid email', () => {
  expect(validateEmail("szaragoza.arkusnexus.com,")).toBe(false);
});

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
