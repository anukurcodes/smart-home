// import {IUserRegisterationPayload} from '../../../interfaces';

import {createUserWithEmailAndPassword, getAuth} from '@firebase/auth';
import {getFBApp} from '../../../utils/fbHelper';
import {IAction} from '../../../interfaces';
import {child, ref, getDatabase, set} from 'firebase/database';
import {call, put} from 'redux-saga/effects';
import {
  setRegistered,
  setError,
  startLoading,
  stopLoading,
} from '../../misc/actions';
import {SagaIterator} from 'redux-saga';
import {saveToDataStorage} from '../../../utils/utils';

function* signUp_handler({payload}: IAction): SagaIterator<void> {
  yield put(startLoading());
  try {
    //   return async (dispatch: any) => {
    const {name, email, password} = payload;
    const app = getFBApp();
    const auth = getAuth(app);

    const result = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password,
    );

    const {uid, stsTokenManager} = result.user;
    const {accessToken, expirationTime} = stsTokenManager;
    const expDate = new Date(expirationTime);

    yield call(createUser, name, email, uid);

    // yield put(authenticate({token: accessToken, userData}));
    yield put(setRegistered(true));

    saveToDataStorage(accessToken, uid, expDate);
  } catch (err: any) {
    const errCode = err.code;
    let msg = 'Something went wrong!!' + errCode;
    if (errCode === 'auth/wrong-password') {
      msg = 'Wrong Email or Password Provided!';
    } else if (errCode === 'auth/user-not-found') {
      msg = 'Email Provided is not Registered!!';
    } else if (errCode === 'auth/email-already-in-use') {
      msg = 'Email Provided is already in use!!';
    }

    yield put(setError(msg));
  } finally {
    yield put(stopLoading());
  }

  //   };
}
export default signUp_handler;

const createUser = async (name: string, email: string, userId: string) => {
  const userData = {name, email, userId, signup_dt: new Date().toISOString()};

  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userId}`);
  await set(childRef, {detials: {...userData}});
  // return userData;
};
