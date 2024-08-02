// Import the functions you need from the SDKs you need
import {FirebaseApp, getApp, getApps, initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

let firebase: FirebaseApp;
export const getFBApp = () => {
  if (firebase) {
    return firebase;
  }

  const fbConfig = {
    apiKey: 'AIzaSyAzpvQRBVwKNCxuNsXN98TdKYD3EOpAO9E',
    authDomain: 'mysmarhomernapp.firebaseapp.com',
    projectId: 'mysmarhomernapp',
    storageBucket: 'mysmarhomernapp.appspot.com',
    messagingSenderId: '1080578937091',
    appId: '1:1080578937091:web:2324707963d6dc81741936',
    measurementId: 'G-JKR0TNY8TZ',
    databaseURL:
      'https://mysmarhomernapp-default-rtdb.asia-southeast1.firebasedatabase.app',
  };
  const app = getApps.length === 0 ? initializeApp(fbConfig) : getApp();
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  firebase = app;
  return app;
};
