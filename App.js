import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ImageBackground,
  // Button,
  // Alert,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00FFFF',
          opacity: 0.7,
        }}>
        {/* <ImageBackground source={image} style={styles.image} /> */}
        <Image
          source={{
            uri:
              'https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png',
            // 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 150, height: 150, marginBottom: 10}}
        />
        {/* <Text style={styles.TxtSyle}>Login</Text> */}
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        />
        {/* <Button
        style={styles.separator}
        // style={{width: 10}}
        title="Login"
        onPress={() => Alert.alert('Login Successfully')}
      /> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signupTxt}>Don't have an account yet?</Text>
        <Text style={{color: 'blue'}}>Signup</Text>
      </View>
    </ImageBackground>
  );
}
const image = {
  uri: 'https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281457.jpg',
};
const styles = StyleSheet.create({
  // TxtSyle: {
  //   fontSize: 20,
  //   marginBottom: 10,
  //   fontStyle: 'normal',
  // },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
    width: 300,
    fontSize: 18,
    borderRadius: 25,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  // separator: {
  //   marginTop: 500,
  //   marginVertical: 10,
  //   borderBottomColor: '#737373',
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  // },
  button: {
    width: 100,
    backgroundColor: '#3169E2',
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: '#eee',
  },
  signupTxt: {
    marginTop: 45,
    // marginVertical: 15,
  },
});
