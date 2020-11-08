import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { RootScreen } from './screens/RootScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { LoginScreen } from './screens/LoginScreen';
import { Icon } from 'react-native-elements';
import { OnBoarding } from './components/OnBoarding/onBoarding';

const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: '#151515',
  },
  title: {
    color: "white"
  }
})

const AppRouter = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function publicRoute() {
    return (
      // <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = 'globe';
              } else if (route.name === 'Profile') {
                iconName = 'user';
              }
  
              return <Icon type="font-awesome" name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            style: {backgroundColor: '#4c4c4c'}
          }}
        >
          <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator> 
      // </NavigationContainer>
    )
  }

  function onBoardingRoute() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnBoarding">
          <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
          <Stack.Screen name="Session" component={sessionRoute} options={{ headerShown: false }} />
          <Stack.Screen name="Public" component={publicRoute} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  function sessionRoute() {
    return (
      // <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Root" component={RootScreen} options={{
            headerShown: false 
          }} />

          <Stack.Screen name = "Login" component={LoginScreen} options={{
            headerShown: false,
          }} />

          <Stack.Screen name = "Register" component={RegisterScreen} options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
      // </NavigationContainer>
    )
  }


  return onBoardingRoute();
}

export { AppRouter };
