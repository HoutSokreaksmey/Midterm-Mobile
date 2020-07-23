import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import MyTextInput from './TextInput';

export default () => {
  //   const [hasError, setHasError] = useState(false);
  //   const isTextOnly = val => {
  //     // return val.match(/[A-Za-z]/);
  //     return /[A-Za-z]/.test(val);
  //   };

  //   const [hasErrorPhone, setHasErrorPhone] = useState(false);
  //   const isNumberOnly = val => {
  //     // return val.match(/[0-9]/) && val.length <= 5;
  //     return /[0-9]/.test(val) && val.length <= 5;
  //   };

  return (
    <View>
      <MyTextInput
        placeholder="User"
        type="text"
        onChangeText={text => alert(text)}
      />
      <MyTextInput placeholder="First User" validate={true} />
      <MyTextInput placeholder="Last User" type="text" />
      <MyTextInput placeholder="Phone Numer" type="number" validate={true} />
      {/* <TextInput
        placeholder="Input Username"
        onChangeText={txt =>
          txt ? setHasError(!isTextOnly(txt)) : setHasError(false)
        }
      />
      {hasError && (
        <Text style={styles.error}>Only character A-Z are allow</Text>
      )} */}
      {/* <TextInput
        placeholder="Input Phone Numer"
        onChangeText={txt =>
          txt ? setHasErrorPhone(!isNumberOnly(txt)) : setHasErrorPhone(false)
        }
      /> */}
      {/* {hasErrorPhone && <Text style={styles.error}>Only Number are allow</Text>} */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   error: {
//     color: 'red',
//   },
// });
