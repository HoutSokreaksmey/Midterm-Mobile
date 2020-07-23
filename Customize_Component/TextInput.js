import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const validation = {
  number: {
    validate: val => {
      return /[0-9]/.test(val) && val.length <= 5;
    },
    message: 'Only number are allow',
  },
  text: {
    validate: val => {
      return /[A-Za-z]/.test(val);
    },
    message: 'Only character A-Z are allow',
  },
};
// const vaidation = {
//   number: {
//     validate: val => {
//       return /[0-9]/.test(val) && val.length <= 5;
//     },
//     message: 'Only number are allow',
//   }
//   text: {
//     validate: val => {
//       return /[A-Za-z]/.test(val);
//     },
//     message: 'Only character A-Z are allow',
//   },
// };

// export default props => {
const MyTextInput = props => {
  const [hasError, setHasError] = useState(false);
  const validator = validation[props.type] || validation.text;

  //   const isTextOnly = val => {
  //     // return val.match(/[A-Za-z]/);
  //     return /[A-Za-z]/.test(val);
  //   };

  //   const isNumberOnly = val => {
  //     // return val.match(/[0-9]/) && val.length <= 5;
  //     return /[0-9]/.test(val) && val.length <= 5;
  //   };

  //   alert(props.type);

  const validate = val => {
    // if (props.type === 'number') {
    //   return isNumberOnly(val);
    // }
    // return isTextOnly(val);
    // return validation[props.type].validate(val);
    return validator.validate(val);
  };

  return (
    <>
      <TextInput
        {...props}
        // placeholder="Input Username"
        onChangeText={txt => {
          txt ? setHasError(!validate(txt)) : setHasError(false);
          props.onChangeText(txt);
        }}
      />
      {props.validate && hasError && (
        <Text style={styles.error}>
          {/* {props.type == 'number'
            ? 'Only number are allow'
            : 'Only character A-Z are allow'} */}
          {/* {validation[props.type].message} */}
          {validator.message}
        </Text>
      )}
    </>
  );
};
MyTextInput.defaultProps = {
  onChangeText: () => {},
}
export default MyTextInput;

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
