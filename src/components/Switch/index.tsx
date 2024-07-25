import React, {FC, useState} from 'react';
import {IPublishPayload, ISwitchBoxProps} from '../../interfaces';
import InsetShadow from 'react-native-inset-shadow';

import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const Switch: FC<ISwitchBoxProps> = ({data, onClick}) => {
  // const isDarkMode = useColorScheme() === 'dark';
  var {id, isOn, title} = data;
  const [switchOn, setSwitchOn] = useState(isOn);
  const handleTogle = () => {
    setSwitchOn(!switchOn);
    const payload: IPublishPayload = {
      cmd: !switchOn ? 'ON' : 'OFF',
      data: id,
    };
    onClick && onClick(payload);
  };
  return (
    <Pressable onPress={handleTogle}>
      <InsetShadow
        containerStyle={styles.switchWrapper}
        top={switchOn}
        right={false}
        bottom={!switchOn}
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
            switchOn ? styles.indecatorOn : styles.indecatorOff,
          ]}
        />
        {/* </View> */}
      </InsetShadow>
    </Pressable>
  );
};

export default Switch;
