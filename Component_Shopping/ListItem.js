import React from 'react';
import {FlatList} from 'react-native';
import Item from './Item';
import ShopListContext from './ShopListContext';

export default class ListItem extends React.Component {
  render() {
    return (
      <ShopListContext.Consumer>
        {context => {
          return (
            <FlatList
              data={context.list}
              renderItem={props => <Item {...props} />}
            />
          );
        }}
      </ShopListContext.Consumer>
    );
  }
}
