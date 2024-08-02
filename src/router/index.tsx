import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import React, {useEffect} from 'react';
import Login from '../screens/Login';
import {IState, RootStackParamList} from '../interfaces';
import RegisterUser from '../screens/RegisterUser';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {setError} from '../redux/misc/actions';
import WelcomeScreen from '../screens/welcomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const headerBarStyle = {
  borderBottomColor: '#d3d3d3',
  borderBottomWidth: 1,
  shadowOffset: {width: 5, height: 5},
  shadowOpacity: 0.4,
  shadowRadius: 3,
  elevation: 5,
};

const NavStack = () => {
  const {isLoggedIn, error} = useSelector((state: IState) => state.misc);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error !== '') {
      Alert.alert('Error Occured!!', error, [
        {text: 'Okay!', onPress: () => dispatch(setError(''))},
      ]);
    }
  }, [dispatch, error]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: headerBarStyle,
        }}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          // options={{title: 'User Login'}}
        />
        {!isLoggedIn && (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'User Login'}}
          />
        )}
        {!isLoggedIn && (
          <Stack.Screen
            name="RegisterUser"
            component={RegisterUser}
            options={{title: 'User Registration'}}
          />
        )}
        {isLoggedIn && (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Your Smart Home'}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;
