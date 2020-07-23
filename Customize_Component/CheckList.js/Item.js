import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import checkIcon from './checkIcon.jpg';

const CheckedItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Image style={styles.icon} source={checkIcon} />
      <Text style={styles.itemText}>{'  ' + item}</Text>
    </View>
  );
};

const UncheckItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Text>{'       '}</Text>
      <Text style={styles.itemText}>{'  ' + item}</Text>
    </View>
  );
};

export {CheckedItem, UncheckItem};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 5,
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 15,
    color: 'white',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
