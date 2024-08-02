import {IAction} from '../../../interfaces';
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  inMemoryPersistence,
} from 'firebase/auth';
import {SagaIterator} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {getFBApp} from '../../../utils/fbHelper';
import {ref, getDatabase, child, da, get} from 'firebase/database';
import {authenticate} from '../../user/actions';
import {
  loginSuccess,
  setError,
  startLoading,
  stopLoading,
} from '../../misc/actions';
import {saveToDataStorage} from '../../../utils/utils';
// import database from '@react-native-firebase/database';

export default function* doLogin_Hanlder({
  payload,
}: IAction): SagaIterator<void> {
  yield put(startLoading());
  try {
    const app = getFBApp();
    const auth = getAuth(app);
    yield call(setPersistence, auth, inMemoryPersistence);

    const {email, password} = payload;
    const result = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password,
    );
    const {uid, stsTokenManager} = result.user;
    const {accessToken, expirationTime} = stsTokenManager;
    const expDate = new Date(expirationTime);

    const userData = yield call(getUserData, uid);

    yield put(authenticate({token: accessToken, userData}));
    yield put(loginSuccess());
    saveToDataStorage(accessToken, uid, expDate);
  } catch (err: any) {
    const errCode = err.code;
    let msg;
    if (errCode === 'auth/wrong-password') {
      msg = 'Wrong Email or Password Provided!';
    } else if (errCode === 'auth/user-not-found') {
      msg = 'Email Provided is not Registered!!';
    } else if (errCode === 'auth/invalid-email') {
      msg =
        'Email Provided id Invalid!! Please enter a valid email and password to login';
    } else if (errCode === 'auth/invalid-credential') {
      msg =
        'Invalid Email or Password!! Please enter a valid email and password to login';
    } else {
      msg = 'Something went wrong!! - ' + errCode;
    }

    yield put(setError(msg));
  } finally {
    yield put(stopLoading());
  }
}

const getUserData = async (userId: any): Promise<any> => {
  const app = getFBApp();
  const dbRef = ref(getDatabase(app));

  get(child(dbRef, `users/${userId}/details`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        setError('User Not Found!!');
      }
    })
    .catch(error => {
      console.error(error);
      setError('Unable to fetch User Details!!');
    });

  // return sna÷p.val();
};
