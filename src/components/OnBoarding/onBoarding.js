import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { getItem } from '../../asyncStoreManager';
import { storeCredentials } from '../../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#2c2c2c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 21,
    color: 'white'
  }
});

const OnBoarding = ({ navigation }) => {
  const dispatch = useDispatch();

  const getSessionData = async () => {
    let userData = await getItem('session');
    console.log("User data :", userData);
    if(userData != null) {
      console.log('User data found', userData);
      dispatch(storeCredentials(userData));
    }
    navigation.navigate('Public');
    console.log('User data not found');
  }

  useEffect(() => {
    getSessionData();

    return () => {
      console.log('OnBoarding unmounted');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Training monitor</Text>
    </View>
  )
}

export { OnBoarding };
