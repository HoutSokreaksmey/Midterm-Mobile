import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from '../Styles';
import Button from '../../Customize_Component/Button';
import TextInput from '../../Customize_Component/TextInput';
import {SCREEN_NAME} from '../Index';
// import {useNavigation} from '@react-navigation/native';

// export default () => {
export default props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const Login = () => {
    // alert([username, password].join('\n'));
    props.navigation.navigate(SCREEN_NAME.HOME, {
      user: username,
      pass: password,
    });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.defaulFontSize}>Home Screen</Text> */}
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onClick={Login}>Login</Button>
    </View>
  );
};

// const styles = {
//   container: {
//     flex: 1,
//   },
// };
