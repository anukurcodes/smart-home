import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getFBApp} from './fbHelper';
import {getAuth} from '@firebase/auth';
import {getFBApp} from './fbHelper';

export const saveToDataStorage = (token: any, userId: any, expDate: Date) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({token, userId, expiryDate: expDate.toISOString()}),
  );
};

export const removeUserDatafromStorage = () => {
  getAuth().signOut();
  AsyncStorage.removeItem('userData');
};

export const validateToken = (userData: string) => {
  const auth = getAuth(getFBApp());

  const parsedUserData = JSON.parse(userData);

  if (parsedUserData.expiryDate <= new Date()) {
    return true;
  } else {
    const aa = auth.onAuthStateChanged(user => (user !== null ? true : false));

    return aa;
  }
};
