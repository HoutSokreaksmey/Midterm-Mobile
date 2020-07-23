import React from 'react';
import {Text, View} from 'react-native';
// import styles from '../Styles';
import Button from '../../Customize_Component/Button';
import {SCREEN_NAME} from '../Index';
import {useNavigation} from '@react-navigation/native';

// export default () => {
export default props => {
  const Login = () => {
    props.navigation.navigate(SCREEN_NAME.HOME);
  };

  return (
    <View>
      {/* <Text style={styles.defaulFontSize}>Home Screen</Text> */}
      <Button onClick={Login}>Login</Button>
      <Box1 />
      <Box2 />
    </View>
  );
};

const Box1 = () => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate(SCREEN_NAME.HOME);
  };
  return (
    <View style={styles.box}>
      <Text>Box1</Text>
      <Button onClick={navigate}>Home</Button>
    </View>
  );
};

const Box2 = () => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate(SCREEN_NAME.ABOUT_US);
  };
  return (
    <View style={styles.box}>
      <Text>Box1</Text>
      <Button onClick={navigate}>About Us</Button>
    </View>
  );
};

const styles = {
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'gray',
    margin: 20,
  },
};
