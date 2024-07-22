import React, {FC} from 'react';
import {ISwitchBoxWrapperProps} from '../../interfaces';
import {Text, View} from 'react-native';
import Switch from '../Switch';
import {styles} from './styles';

const SwitchBoxWrapper: FC<ISwitchBoxWrapperProps> = ({data}) => {
  // arrayMa
  return (
    <View style={styles.switchBoxContainer}>
      {data.length ? (
        data.map(sw => <Switch isOn={sw.isOn} title={sw.title} />)
      ) : (
        <Text>No Switch</Text>
      )}
    </View>
  );
};
export default SwitchBoxWrapper;
