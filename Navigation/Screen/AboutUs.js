import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Styles';
import Button from '../../Customize_Component/Button';
import {SCREEN_NAME} from '../Index';

export default props => {
  const back = () => {
    props.navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAME.LOGIN}],
    });
  };
  return (
    <View>
      <Text style={styles.defaulFontSize}>About Us</Text>
      <Button onClick={back}>Back</Button>
    </View>
  );
};
