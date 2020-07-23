import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  // Button,
  TouchableOpacity,
} from 'react-native';

export default class ScreenInfo extends React.Component {
  state = {};

  showInfo = () => {
    const info = [
      `Your username is: ${this.state.UserName}`,
      `Your phone number is: ${this.state.PhoneNumber}`,
      `YOur Address is: ${this.state.Address}`,
    ];
    // eslint-disable-next-line no-alert
    alert('My Info\n' + info.join('\n'));
  };

  // showInfo() {
  //   alert('My Info');
  // }

  // constructor(props) {
  //   super(props);
  //   this.handleInputUserName = this.handleInputUserName.bind(this);
  //   this.handleInputPhoneNumber = this.handleInputPhoneNumber.bind(this);
  //   this.handleInputAddress = this.handleInputAddress.bind(this);
  // }

  // handleInputUserName(UserName) {
  //   this.setState({UserName});
  // }

  // handleInputPhoneNumber(PhoneNumber) {
  //   this.setState({PhoneNumber});
  // }

  // handleInputAddress(Address) {
  //   this.setState({Address});
  // }

  handleInputUserName = UserName => {
    this.setState({UserName});
  };

  handleInputPhoneNumber = PhoneNumber => {
    this.setState({PhoneNumber});
  };

  handleInputAddress = Address => {
    this.setState({Address});
  };

  render() {
    return (
      <View>
        <View style={styles.inputGroup}>
          <Text style={styles.defaulfontsize}>User Name</Text>
          <TextInput
            style={StyleSheet.compose(
              styles.defaulfontsize,
              styles.textInput,
            )}
            placeholder="Input your user name"
            onChangeText={this.handleInputUserName}
          />
        </View>
        {/* <Text style={styles.defaulfontsize}>User Name: {this.state.UserName}</Text> */}
        <View style={styles.inputGroup}>
          <Text style={styles.defaulfontsize}>Phone Number</Text>
          <TextInput
            style={StyleSheet.compose(
              styles.defaulfontsize,
              styles.textInput,
            )}
            placeholder="Input your phone number"
            onChangeText={this.handleInputPhoneNumber}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.defaulfontsize}>Address</Text>
          <TextInput
            style={StyleSheet.flatten([
              styles.textInput,
              styles.textArea,
              styles.defaulfontsize,
            ])}
            placeholder="Input your Address"
            multiline={true}
            onChangeText={this.handleInputAddress}
          />
        </View>
        {/* <Button title="Submit" onPress={this.showInfo} /> */}
        <TouchableOpacity onPress={this.showInfo}>
          <View style={styles.button}>
            <Text>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  defaulfontsize: {
    fontSize: 20,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  inputGroup: {
    marginVertical: 10,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    // borderWidth: 3,
    backgroundColor: 'gray',
    // borderColor: '#DDD',
    marginHorizontal: 5,
    borderRadius: 25,
    elevation: 10,
    marginTop: 10,
  },
});
