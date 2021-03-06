import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import checkIcon from './checkIcon.jpg';
import CheckLis from './CheckList.js/CheckLis';

export default () => {
  const todoList = ['Breakfast', 'Lunch', 'Dinner'];
  //   const [checkedItem, setCheckedItem] = useState(['Breakfast']);
  //   const oncheckItem = item => {
  //     if (checkedItem.includes(item)) {
  //       return setCheckedItem(
  //         checkedItem.filter(checkedItem => checkedItem !== item),
  //       );
  //     }
  //     setCheckedItem([...checkedItem, item]);
  //   };
  return (
    <View>
      <Text>Multiple CheckList</Text>
      <CheckLis style={{margin: 10}} items={todoList} multiple={true} />
      <Text>Single CheckList</Text>
      <CheckLis items={['A', 'B', 'C']} />
      {/* {todoList.map(item => (
        <TouchableOpacity onPress={() => oncheckItem(item)}>
          <View style={styles.item}>
            {checkedItem.includes(item) ? (
              <Image style={styles.icon} source={checkIcon} />
            ) : (
              <Text>{'       '}</Text>
            )}
            <Text style={styles.itemText}>{'  ' + item}</Text>
          </View>
        </TouchableOpacity>
      ))} */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'gray',
//     padding: 10,
//     margin: 5,
//     flexDirection: 'row',
//   },
//   itemText: {
//     fontSize: 15,
//     color: 'white',
//   },
//   icon: {
//     width: 25,
//     height: 25,
//   },
// });
