import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Styles';
import Button from '../../Customize_Component/Button';

// export default () => {
export default props => {
  const GotoAboutUs = () => {
    props.navigation.navigate('AboutUs');
  };

  return (
    <View>
      <Text style={styles.defaulFontSize}>Home Screen</Text>
      <Text style={styles.defaulFontSize}>
        {/* ? optional javascipt new vertion */}
        Username: {props.route?.params?.user}
      </Text>
      <Text style={styles.defaulFontSize}>
        Password: {props.route?.params?.pass}
      </Text>
      <Button onClick={GotoAboutUs}>Go TO About Us</Button>
    </View>
  );
};
