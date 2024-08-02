/* eslint-disable react-native/no-inline-styles */
import React, {FC, useReducer, useState} from 'react';

import {IState, Props} from '../../interfaces';
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFacebook,
  faGoogle,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {doLogin} from '../../redux/misc/actions';
import {inpReducer, validateInp} from '../../redux/inputValidation';

const Logo = require('../../assets/images/logo.png');

type IFormInitState = {
  inpValues: {
    email: string;
    password: string;
  };
  inpValidities: {email: boolean; password: boolean};
  isFormValid: boolean;
};

const formInitState: IFormInitState = {
  inpValues: {
    email: '',
    password: '',
  },
  inpValidities: {email: false, password: false},
  isFormValid: false,
};

const Login: FC<Props> = ({navigation}) => {
  const [formState, dispatchFormState] = useReducer<
    React.Reducer<IFormInitState, any>
  >(inpReducer, formInitState);

  const [click, setClick] = useState(false);

  const {isLoading} = useSelector((state: IState) => state.misc);
  const dispatch = useDispatch();

  const handleLogin = () => {
    formState.isFormValid && dispatch(doLogin({...formState.inpValues}));
  };

  const onInpChnage = (id: string, val: string) => {
    const result = validateInp(id, val);

    dispatchFormState({inpId: id, validationRes: result, inpVal: val});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputWrapper}>
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
        <View style={styles.rememberForgotPass}>
          <View style={styles.rememberMeSwitch}>
            <Switch
              value={click}
              onValueChange={setClick}
              trackColor={{true: 'green', false: 'gray'}}
            />
            <Text style={styles.rememberMeText}>Remember Me</Text>
          </View>
          <View>
            <Pressable onPress={() => Alert.alert('Forget Password!')}>
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Pressable
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={!formState.isFormValid || isLoading}>
            {isLoading ? (
              <ActivityIndicator animating />
            ) : (
              <Text style={styles.loginButtonText}>LOGIN</Text>
            )}
          </Pressable>
          <Text style={styles.smLoginText}>OR LOGIN WITH</Text>
        </View>

        <View style={styles.smIconWrapper}>
          <FontAwesomeIcon icon={faFacebook} style={styles.smIcons} />
          <FontAwesomeIcon icon={faGoogle} style={styles.smIcons} />
          <FontAwesomeIcon icon={faApple} style={styles.smIcons} />
        </View>
      </View>
      <Text style={styles.footNote}>
        Don't Have Account?{' '}
        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate('RegisterUser')}>
          Register Now
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Login;
