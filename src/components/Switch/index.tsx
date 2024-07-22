import React, {FC} from 'react';
import {ISwitchBoxProps} from '../../interfaces';
import InsetShadow from 'react-native-inset-shadow';

import {Text, View} from 'react-native';
import {styles} from './styles';

const Switch: FC<ISwitchBoxProps> = props => {
  // const isDarkMode = useColorScheme() === 'dark';
  const {isOn, title} = props;
  return (
    <InsetShadow containerStyle={styles.switchWrapper}>
      {/* <View
        style={[
          styles.switchWrapper,
          isOn ? styles.switchOn : styles.switchOff,
        ]}> */}
      <Text style={styles.switchTitle}>{title}</Text>
      <View
        style={[
          styles.indicator,
          isOn ? styles.indecatorOn : styles.indecatorOff,
        ]}
      />
      {/* </View> */}
    </InsetShadow>
  );
};

export default Switch;
