import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {FC, useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {doLogout, loginSuccess} from '../../redux/misc/actions';
import {validateToken} from '../../utils/utils';
import {useDispatch} from 'react-redux';
import {Props} from '../../interfaces';
import {StackActions} from '@react-navigation/native';

const WelcomeScreen: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkforLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const checkforLoggedIn = () => {
    setTimeout(() => {
      AsyncStorage.getItem('userData')
        .then(res => {
          if (res) {
            const uData = validateToken(res);

            if (!uData) {
              Alert.alert(
                'Session Expired!!',
                'Your Login Seesion has been expired!!.\nPlease Loing again.',
                [
                  {
                    text: 'Okay!',
                    onPress: () => {
                      dispatch(doLogout());
                      navigation.dispatch(StackActions.replace('Login'));
                    },
                  },
                ],
              );
            } else {
              dispatch(loginSuccess());
              navigation.dispatch(StackActions.replace('Home'));
            }
          } else {
            navigation.dispatch(StackActions.replace('Login'));
            return;
          }
        })
        .catch(() => {
          Alert.alert(
            'Session Expired!!',
            'Your Login Seesion has been expired!!.\nPlease Loing again.',
            [
              {
                text: 'Okay!',
                onPress: () => {
                  dispatch(doLogout());
                  navigation.dispatch(StackActions.replace('Login'));
                },
              },
            ],
          );
        });
    }, 1000);
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.welcomeText}>Welcome to Smart Home</Text>
    </View>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 24,
  },
});
