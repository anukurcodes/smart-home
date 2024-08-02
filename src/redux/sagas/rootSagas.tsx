import {takeLatest} from '@redux-saga/core/effects';
import {DO_LOGIN, DO_REGISTER} from '../misc/types';
import doLogin_Hanlder from './handler/login';
import signUp_handler from './handler/signup';

export function* watcherSaga() {
  yield takeLatest(DO_LOGIN, doLogin_Hanlder);
  yield takeLatest(DO_REGISTER, signUp_handler);
}
