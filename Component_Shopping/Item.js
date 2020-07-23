import React, {useContext} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import ShopListContext from './ShopListContext';

const Item = props => {
  const {index, item} = props;
  const context = useContext(ShopListContext);
  const {handleSelectItem, selectedItem} = context;
  // const {handleSelectItem, selectedItem} = useContext(ShopListContext);
  return (
    <TouchableOpacity onPress={() => handleSelectItem(item)}>
      <Text
        key={index}
        style={StyleSheet.compose(
          styles.item,
          selectedItem === item && styles.active,
        )}>
        {index} . {item}
      </Text>
    </TouchableOpacity>
  );
};

// import React from 'react';
// import {TouchableOpacity, Text, StyleSheet} from 'react-native';
// import ShopListContext from './ShopListContext';

// const Item = ({index, item}) => {
//   return (
//     <ShopListContext.Consumer>
//       {context => {
//         return (
//           <TouchableOpacity onPress={() => context.handleSelectItem(item)}>
//             <Text
//               key={index}
//               style={StyleSheet.compose(
//                 styles.item,
//                 context.selectedItem === item && styles.active,
//               )}>
//               {index} . {item}
//             </Text>
//           </TouchableOpacity>
//         );
//       }}
//     </ShopListContext.Consumer>
//   );
// };
export default Item;
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#DDD',
    padding: 10,
    textAlign: 'center',
    margin: 5,
  },
  active: {
    backgroundColor: '#095CCD',
  },
});
