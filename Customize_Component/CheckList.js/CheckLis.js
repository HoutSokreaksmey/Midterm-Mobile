import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import checkIcon from './checkIcon.jpg';
import {CheckedItem, UncheckItem} from './Item';

// export default () => {
const CheckList = ({items, multiple, ...props}) => {
  //   const todoList = ['Breakfast', 'Lunch', 'Dinner', 'Meeting'];
  const [checkedItems, setCheckedItem] = useState(['Breakfast']);

  const oncheckItem = item => {
    if (checkedItems.includes(item)) {
      return setCheckedItem(
        checkedItems.filter(checkedItem => checkedItem !== item),
      );
    }
    if (multiple) {
      setCheckedItem([...checkedItems, item]);
    } else {
      setCheckedItem([item]);
    }
  };
  return (
    <View {...props}>
      {/* {todoList.map(item => ( */}
      {items.map(item => (
        <TouchableOpacity onPress={() => oncheckItem(item)}>
          {/* <View style={styles.item}>
            {checkedItems.includes(item) ? (
              <Image style={styles.icon} source={checkIcon} />
            ) : (
              <Text>{'       '}</Text>
            )}
            <Text style={styles.itemText}>{'  ' + item}</Text>
          </View> */}

          {checkedItems.includes(item) ? (
            <CheckedItem item={item} />
          ) : (
            <UncheckItem item={item} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

CheckList.defaultProps = {
  items: [],
};
export default CheckList;

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
