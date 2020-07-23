import React from 'react';
import {Image, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './Screen/Home';
import AboutUs from './Screen/AboutUs';
import Login from './Screen/Login';
import styles from './Styles';

const Stact = createStackNavigator();
const Drawer = createDrawerNavigator();

//Snake case with upper case for constant
export const SCREEN_NAME = {
  LOGIN: 'Login',
  HOME: 'Home',
  ABOUT_US: 'AboutUs',
};

export default () => {
  return (
    <NavigationContainer>
      {/* <Stact.Navigator
        // initialRouteName="Login" //defaul screen
        initialRouteName={SCREEN_NAME.LOGIN}
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#eee',
          headerStyle: {
            backgroundColor: 'gray',
          },
        }}>
        <Stact.Screen
          name={SCREEN_NAME.HOME}
          component={Home}
          options={{title: 'Home Page'}}
        />
        <Stact.Screen name={SCREEN_NAME.LOGIN} component={Login} />
        <Stact.Screen
          name={SCREEN_NAME.ABOUT_US}
          component={AboutUs}
          options={{headerStyle: {backgroundColor: 'pink'}}}
        />
      </Stact.Navigator> */}

      <Drawer.Navigator
        initialRouteName={SCREEN_NAME.LOGIN}
        drawerContent={CustomDrawerContent}
        drawerContentOptions={{
          activeTintColor: 'blue',
          // activeBackgroundColor: 'gray',
        }}>
        <Drawer.Screen name={SCREEN_NAME.ABOUT_US} component={AboutUs} />
        <Drawer.Screen name={SCREEN_NAME.HOME} component={Home} />
        <Drawer.Screen name={SCREEN_NAME.LOGIN} component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#eee'}}>
        <Image
          style={styles.profile}
          source={{
            uri:
              'https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png',
          }}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => {
          alert('Can I help you!');
        }}
      />
    </DrawerContentScrollView>
  );
};
