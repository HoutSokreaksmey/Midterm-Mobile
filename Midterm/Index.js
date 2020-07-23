import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenLogin from './ScreenLogin';
import ScreenProfile from './ScreenProfile';

const Stact = createStackNavigator();

export const SCREEN_NAME = {
  LOGIN: 'ScreenLogin',
  PROFILE: 'ScreenProfile',
};

export default () => {
  return (
    <NavigationContainer>
      <Stact.Navigator
        initialRouteName="ScreenLogin"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#eee',
          headerStyle: {
            backgroundColor: '#00FFFF',
          },
        }}>
        <Stact.Screen
          name={SCREEN_NAME.PROFILE}
          component={ScreenProfile}
          options={{
            headerStyle: {headerTintColor: 'black', backgroundColor: 'blue'},
          }}
        />
        <Stact.Screen name={SCREEN_NAME.LOGIN} component={ScreenLogin} />
      </Stact.Navigator>
    </NavigationContainer>
  );
};
