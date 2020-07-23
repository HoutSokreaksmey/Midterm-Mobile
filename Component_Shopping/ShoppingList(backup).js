import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  // ScrollView,
  FlatList,
} from 'react-native';

export default class ShoppingList extends React.Component {
  state = {
    shoppingList: ['ABC', 'Tiger', 'Apple', 'Banana', 'Potato'],
  };

  addItem = () => {
    // alert(this.state.newItem);
    const {shoppingList, newItem} = this.state;
    if (!newItem) {
      return alert('Please input new item');
    }

    this.setState({
      shoppingList: [...shoppingList, newItem],
      newItem: '',
    });
  };

  handleNewItem = item => {
    this.setState({
      newItem: item,
    });
  };

  renderItem = ({index, item}) => {
    return (
      <Text key={index} style={styles.item}>
        {index} . {item}
      </Text>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <TextInput
            value={this.state.newItem}
            style={styles.defaulfontsize}
            placeholder="Input new items"
            onChangeText={this.handleNewItem}
          />
          <Button
            style={styles.button}
            title="Add New Item"
            onPress={this.addItem}
          />
          <Text style={styles.defaulfontsize}>Shopping List</Text>
          {/* <Text style={styles.item}>Item</Text> */}
          {/* <ScrollView>
            {this.state.shoppingList.map((item, index) => {
              return (
                <Text key={index} style={styles.item}>
                  {item}
                </Text>
              );
            })}
          </ScrollView> */}
          <FlatList
            data={this.state.shoppingList}
            renderItem={this.renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  defaulfontsize: {
    fontSize: 20,
  },
  item: {
    padding: 10,
    backgroundColor: '#eee',
    textAlign: 'center',
    margin: 5,
  },
  button: {
    margin: 10,
  },
});
