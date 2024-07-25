import React, {FC} from 'react';
import {ISwitchBoxWrapperProps} from '../../interfaces';
import {Text, View} from 'react-native';
import Switch from '../Switch';
import {styles} from './styles';

const SwitchBoxWrapper: FC<ISwitchBoxWrapperProps> = ({data, onClick}) => {
  // arrayMa

  return (
    <View style={styles.switchBoxContainer}>
      {data.length ? (
        data.map((sw, key) => (
          <Switch
            key={key}
            data={{id: sw.id, isOn: sw.isOn, title: sw.title}}
            onClick={onClick}
          />
        ))
      ) : (
        <Text>No Switch</Text>
      )}
    </View>
  );
};
export default SwitchBoxWrapper;
