import React, {useState, useRef} from 'react';
import {View, Animated, TouchableOpacity, Easing} from 'react-native';
import {styles} from './styles';

export default function AnimatedSwitch() {
  const positionButton = useRef(new Animated.Value(0)).current;

  const [isOn, setIsOn] = useState(false);

  const startAnimToOff = () => {
    Animated.timing(positionButton, {
      toValue: 0,
      duration: 200,
      easing: Easing.ease,
    }).start();
  };

  const startAnimToOn = () => {
    Animated.timing(positionButton, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
    }).start();
  };

  const positionInterPol = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const backgroundColorAnim = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'green'],
  });

  const initialOpacityOn = positionButton.interpolate({
    inputRange: [0, 0.25, 0.5, 1],
    outputRange: [0, 0.25, 0.5, 1],
  });

  const initialOpacityOff = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const onPress = () => {
    if (isOn) {
      startAnimToOff();
      setIsOn(false);
    } else {
      startAnimToOn();
      setIsOn(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{height: 30, width: 60}}
        activeOpacity={0.9}
        onPress={onPress}>
        <Animated.View
          style={[
            styles.mainStyes,
            {
              backgroundColor: backgroundColorAnim,
            },
          ]}>
          <Animated.Text
            style={[
              styles.eahcStyles,
              {
                opacity: initialOpacityOn,
              },
            ]}>
            ON
          </Animated.Text>
          <Animated.Text
            style={[
              styles.eahcStylesOf,
              {
                opacity: initialOpacityOff,
              },
            ]}>
            OFF
          </Animated.Text>
          <Animated.View
            style={[
              styles.basicStyle,
              {
                transform: [
                  {
                    translateX: positionInterPol,
                  },
                ],
              },
            ]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
