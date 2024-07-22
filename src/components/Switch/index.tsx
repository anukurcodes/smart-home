import React, {FC} from 'react';
import {ISwitchBoxProps} from '../../interfaces';
import InsetShadow from 'react-native-inset-shadow';

import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const Switch: FC<ISwitchBoxProps> = props => {
  // const isDarkMode = useColorScheme() === 'dark';
  var {isOn, title} = props;
  const handleTogle = () => {
    isOn = !isOn;
    console.warn('asa');
  };
  return (
    <Pressable onPress={handleTogle}>
      <InsetShadow
        containerStyle={styles.switchWrapper}
        top={isOn}
        right={false}
        bottom={!isOn}
        left={false}
        shadowColor="#000"
        shadowOffset={20}
        shadowOpacity={0.75}
        shadowRadius={12}>
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
    </Pressable>
  );
};

export default Switch;
