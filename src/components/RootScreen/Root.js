import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, StyleSheet, Image, Modal, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen'
import { COLORS } from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: COLORS.secondaryColorDarker,
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    alignSelf: 'center',
    height: height(100),
    width: width(100),
  },
  buttonContainer: {
    alignSelf: 'center',
    flex: 1,
    height: height(30),
    justifyContent: 'center',
    paddingHorizontal: width(5),
    width: width(85),
  },
  buttonStyle: {
    borderRadius: 20
  },
  button: {
    backgroundColor: COLORS.primaryColor
  },
  textStyle: {
    alignSelf: 'center',
    color: COLORS.white,
    fontSize: 12,
    marginVertical: 10,
  },
});

const Root = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <View style={styles.container}>
      <View style = { styles.imageContainer }>
        <Image 
          source={require('../../assets/images/logo.png')}
          width={60}
          height={60}
          resizeMode="center"
        />
      </View>
      <View style = { styles.buttonContainer }>
        <Button
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.button}
          title="Log in"
          onPress={() => navigation.navigate('Login')}
          raised
        />
        <Text style={styles.textStyle}>
          Or
        </Text>
        <Button
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.button}
          title="Sign up"
          onPress={() => navigation.navigate('Register')}
          raised
        />
      </View>
    </View>
  )
}

export {Root}
