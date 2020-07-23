import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const OPACITY = {
  BLUR: 0.3,
  DEFAULT: 1,
};

export default props => {
  const [opacity, setOpacity] = useState(1);

  return (
    <TouchableWithoutFeedback onPress={props.onClick}>
      <View
        onTouchStart={() => setOpacity(OPACITY.BLUR)}
        onTouchEnd={() => setOpacity(OPACITY.DEFAULT)}
        style={StyleSheet.flatten([styles.button, props.style, {opacity}])}>
        <Text style={props.textStyle}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0DF',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    elevation: 5,
  },
});
