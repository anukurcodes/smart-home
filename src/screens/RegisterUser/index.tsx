/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect, useReducer} from 'react';

import {IState, Props} from '../../interfaces';
import {
  ActivityIndicator,
  Alert,
  Image,
  // Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFacebook,
  faGoogle,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {doRegisterUser, setRegistered} from '../../redux/misc/actions';
import {inpReducer, validateInp} from '../../redux/inputValidation';

const Logo = require('../../assets/images/logo.png');

type IFormInitState = {
  inpValues: {
    name: string;
    email: string;
    password: string;
  };
  inpValidities: {name: boolean; email: boolean; password: boolean};
  isFormValid: boolean;
};

const formInitState: IFormInitState = {
  inpValues: {
    name: '',
    email: '',
    password: '',
  },
  inpValidities: {name: false, email: false, password: false},
  isFormValid: false,
};

const RegisterUser: FC<Props> = ({navigation}) => {
  const [formState, dispatchFormState] = useReducer<
    React.Reducer<IFormInitState, any>
  >(inpReducer, formInitState);

  const {isLoading, isUserRegistered} = useSelector(
    (state: IState) => state.misc,
  );
  useEffect(() => {
    if (isUserRegistered) {
      Alert.alert(
        'Conratulations!!!',
        'The user Account has been registered succesfully, you can yow try and login with the same credentials.',
        [{text: 'Okay!', onPress: () => navigation.navigate('Login')}],
      );
      dispatch(setRegistered());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserRegistered]);

  const onInpChnage = (id: string, val: string) => {
    const result = validateInp(id, val);

    dispatchFormState({inpId: id, validationRes: result, inpVal: val});
  };

  const dispatch = useDispatch();

  const handleRegisteration = async () => {
    formState.isFormValid &&
      dispatch(
        doRegisterUser({
          ...formState.inpValues,
        }),
      );

    // navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            id="name"
            style={styles.input}
            placeholder="Enter Full Name"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={val => onInpChnage('name', val)}
          />
          <Text
            style={[
              styles.errorText,
              {display: formState.inpValidities.name ? 'flex' : 'none'},
            ]}>
            {formState.inpValidities.name}
          </Text>
          <TextInput
            id="email"
            style={styles.input}
            placeholder="Enter Email ID"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={val => onInpChnage('email', val)}
          />
          <Text
            style={[
              styles.errorText,
              {display: formState.inpValidities.email ? 'flex' : 'none'},
            ]}>
            {formState.inpValidities.email}
          </Text>
          <TextInput
            id="password"
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={val => onInpChnage('password', val)}
          />
          <Text
            style={[
              styles.errorText,
              {display: formState.inpValidities.password ? 'flex' : 'none'},
            ]}>
            {formState.inpValidities.password}
          </Text>
        </View>

        <View style={styles.inputWrapper}>
          <TouchableOpacity
            style={styles.loginButton}
            disabled={formState.isFormValid || isLoading}
            onPress={() => {
              handleRegisteration();
            }}>
            {isLoading ? (
              <ActivityIndicator animating />
            ) : (
              <Text style={styles.loginButtonText}>Register</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.smIconWrapper}>
          <Text style={styles.smLoginText}>OR LOGIN WITH</Text>
          <FontAwesomeIcon icon={faFacebook} style={styles.smIcons} />
          <FontAwesomeIcon icon={faGoogle} style={styles.smIcons} />
          <FontAwesomeIcon icon={faApple} style={styles.smIcons} />
        </View>
      </View>
      <Text style={styles.footNote}>
        Already Have Account?{' '}
        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate('Login')}>
          Login Now
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default RegisterUser;
