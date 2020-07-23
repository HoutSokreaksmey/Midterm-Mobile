import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SCREEN_NAME} from './Index';

export default props => {
  const Logout = () => {
    props.navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAME.LOGIN}],
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Image
            style={styles.iconprofile}
            source={{
              uri:
                'https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png',
            }}
          />
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>{props.route.params.user}</Text>
            <Text style={styles.caption}>@_name</Text>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="gray" size={20} />
          <Text style={styles.titleaddress}>Phnom Penh, Cambodia</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="gray" size={20} />
          <Text style={styles.titleaddress}>01554524</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="gray" size={20} />
          <Text style={styles.titleaddress}>smey@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={StyleSheet.compose(
            styles.infoBox,
            styles.borderbox,
          )}>
          <Text>$150</Text>
          <Text>Wallet</Text>
        </View>
        <View style={styles.infoBox}>
          <Text>5</Text>
          <Text>Order</Text>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="heart-outline" color="red" size={20} />
          <Text style={styles.menuItemText}>My Favorites</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="truck-delivery" color="red" size={20} />
          <Text style={styles.menuItemText}>Delivery History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="help-rhombus" color="red" size={20} />
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="logout" color="red" size={20} />
          <Text style={styles.menuItemText} onPress={Logout}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconprofile: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginLeft: 100,
    marginTop: 15,
    marginBottom: 5,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    // color: 'gray',
    marginTop: -3,
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  titleaddress: {
    color: 'gray',
    marginLeft: 20,
  },
  borderbox: {
    borderRightColor: '#ddd',
    borderRightWidth: 1,
  },
});
