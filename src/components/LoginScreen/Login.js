import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../assets/colors';
import { logIn, signUp } from '../../redux/actions';
import { validateEmail } from '../../utils';

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 20,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: COLORS.primaryColor
  },
  container: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.secondaryColorDarker
  },
  inputStyle: {
    borderBottomColor: COLORS.primaryColor,
  },
  header: {
    justifyContent: 'center',
    alignItems: "flex-start",
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
  },
  errorMessage: {
    marginTop: 15,
    alignSelf: 'center',
    color: COLORS.primaryColor,
  },
  noAccountText: {
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 15,
  },
  createAccountText: {
    color: COLORS.primaryColorDarker,
    alignSelf: 'center',
    fontSize: 18,
    textDecorationLine: "underline",
    marginTop: 15,
  },
  headerTitle: {
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: "bold",
  }
});

const Login = ({ navigation, store, dispatch }) => {
  // const store = useSelector(({ loginReducer, sessionReducer }) => ({loginReducer, sessionReducer}));
  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  console.log("Session reducer: ", store.sessionReducer);
  console.log("Login reducer: ", store.loginReducer);

  const handleEmailChange = (value) => {
    setEmail(value);
    setInvalidEmail(!validateEmail(value));
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
    setInvalidPassword(value.length < 6);
  }

  const isSubmitButtonDisabled = () => (
    password.length < 6
    || !validateEmail(email)
  );

  const handleOnPress = () => {
    dispatch(logIn({
      data: {
        email: email,
        password: password,
      },
      navigation: navigation,
    }));
  }

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>

      <Input
        value={email}
        onChangeText={handleEmailChange}
        errorMessage={ invalidEmail ? "Invalid email" : "" }
        placeholder="Email"
        placeholderTextColor='white'
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white', size: 16 }}
        inputContainerStyle={styles.inputStyle}
        inputStyle={{ color: "white" }}
      />

      <Input
        value={password}
        secureTextEntry
        onChangeText={handlePasswordChange}
        errorMessage={ invalidPassword ? "Password must be at least 6 characters long" : "" }
        placeholder="Password"
        placeholderTextColor='white'
        leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
        inputContainerStyle={styles.inputStyle}
        inputStyle={{ color: "white" }}
      />

      <Button
        disabled={isSubmitButtonDisabled()}
        disabledStyle={{ backgroundColor: '#cccccc' }}
        containerStyle={styles.buttonStyle}
        buttonStyle={styles.button}
        loading={store.loginReducer.signinIn}
        title="Sign up"
        onPress={handleOnPress}
        raised
      />

      <Text style={styles.errorMessage}>
        {store.loginReducer.errorMessage}
      </Text>

      <Text style={styles.noAccountText}>Don't have an account?</Text>
      
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.createAccountText}>Create one</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export { Login }