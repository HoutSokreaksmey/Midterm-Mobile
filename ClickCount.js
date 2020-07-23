import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default () => {
  const [count, setCount] = useState(0);
  //   const [message, setMessage] = useState(`Total Count: ${count}`);

  function increment() {
    setCount(count + 1);
    // setMessage(`${count}`);
  }
  return (
    <View style={styles.fullscreen}>
      <View style={styles.topScreen}>
        {/* <TouchableOpacity onPress={() => setCount(count + 1)}> */}
        <TouchableOpacity onPress={increment}>
          <Text style={styles.defaulFontSize}>Click Me!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondScreen}>
        <Text style={styles.defaulFontSize}>Total Count: {count} </Text>
        {/* <Text style={styles.defaulFontSize}>{message}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaulFontSize: {
    fontSize: 25,
  },
  fullscreen: {
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD',
    flex: 1,
  },
  topScreen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondScreen: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});
