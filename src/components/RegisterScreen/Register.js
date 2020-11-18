import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../assets/colors';
import { signUp } from '../../redux/actions';
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
    color: COLORS.primaryColor,
  }
});

const Register = ({ navigation }) => {
  const store = useSelector(({ registerReducer }) => registerReducer);
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [disabled, setDisabled] = useState(true);

  const [invalidFullname, setInvalidFullname] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidConfirmPass, setInvalidConfirmPass] = useState(false);

  const handleFullnameChange = (value) => {
    setFullname(value);
    setInvalidFullname(value.length < 3);
  }

  const handleEmailChange = (value) => {
    setEmail(value);
    setInvalidEmail(!validateEmail(value));
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
    setInvalidPassword(value.length < 6);
  }

  const handleConfirmPasswordChange = (value) => {
    setConfirmPass(value);
    setInvalidConfirmPass(value !== password);
  }

  const isSubmitButtonDisabled = () => (
    fullname.length < 3
    || password.length < 6
    || (confirmPass !== password)
    || !validateEmail(email)
  );

  const handleOnPress = () => {
    dispatch(signUp({
      data: {
        name: fullname,
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
          color={COLORS.white}
          size={20}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Input 
        value={fullname}
        placeholder="Full name"
        placeholderTextColor='white'
        errorMessage={ invalidFullname ? "This field is required" : "" }
        onChangeText={handleFullnameChange}
        leftIcon={{ type: 'font-awesome', name: 'user', color: COLORS.white }}
        inputContainerStyle={styles.inputStyle}
        inputStyle={{ color: "white" }}
      />
      <Input
        value={email}
        onChangeText={handleEmailChange}
        errorMessage={ invalidEmail ? "Invalid email" : "" }
        placeholder="Email"
        placeholderTextColor='white'
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: COLORS.white, size: 16 }}
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
        leftIcon={{ type: 'font-awesome', name: 'lock', color: COLORS.white }}
        inputContainerStyle={styles.inputStyle}
        inputStyle={{ color: "white" }}
      />
      <Input
        value={confirmPass}
        secureTextEntry
        onChangeText={handleConfirmPasswordChange}
        errorMessage={ invalidConfirmPass ? "The password doesn't match" : "" }
        placeholder="Confirm password"
        placeholderTextColor='white'
        leftIcon={{ type: 'font-awesome', name: 'lock', color: COLORS.white }}
        inputContainerStyle={styles.inputStyle}
        inputStyle={{ color: "white" }}
      />
      <Button
        disabled={isSubmitButtonDisabled()}
        disabledStyle={{ backgroundColor: '#cccccc' }}
        containerStyle={styles.buttonStyle}
        buttonStyle={styles.button}
        loading={store.signingUp}
        title="Sign up"
        onPress={handleOnPress}
        raised
      />
      <Text style={styles.errorMessage}>
        {store.message}
      </Text>
    </ScrollView>
  )
}

export { Register }
