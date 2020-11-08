import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../redux/actions';

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 20,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: 'red'
  },
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#2c2c2c'
  },
  inputStyle: {
    borderBottomColor: 'red',
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
    color: 'red',
  }
});

const Login = ({ navigation }) => {
  const store = useSelector(({ loginReducer, sessionReducer }) => ({loginReducer, sessionReducer}));
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  console.log("Session reducer: ", store.sessionReducer);
  console.log("Login reducer: ", store.loginReducer);

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(String(email).toLowerCase());
  }

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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="font-awesome"
          name="arrow-left"
          color="white"
          size={20}
          onPress={() => navigation.goBack()}
        />
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
    </ScrollView>
  )
}

export { Login }