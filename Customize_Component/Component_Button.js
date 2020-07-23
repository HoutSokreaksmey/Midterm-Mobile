import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Button from './Button';

// const OPACITY = {
//   BLUR: 0.3,
//   DEFAULT: 1,
// };
export default () => {
  const clickme = () => alert('you have click me');
  const showme = () => alert('you have click show me');
  //   const [opacity, setOpacity] = useState(1);
  return (
    <View>
      <Button onClick={clickme}>Click me</Button>
      <Button
        onClick={showme}
        style={{backgroundColor: 'blue'}}
        textStyle={{color: 'white'}}>
        Show me
      </Button>
      {/* <TouchableWithoutFeedback onPress={clickme}>
        <View
          onTouchStart={() => setOpacity(OPACITY.BLUR)}
          onTouchEnd={() => setOpacity(OPACITY.DEFAULT)}
          style={StyleSheet.compose(
            styles.button,
            {opacity},
          )}>
          <Text>Click Me!</Text>
        </View>
      </TouchableWithoutFeedback> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#0DF',
//     padding: 10,
//     borderRadius: 10,
//     margin: 5,
//     alignItems: 'center',
//     elevation: 5,
//   },
// });
