import {IState_User} from '../../interfaces';
import {DO_AUTHENTICATE, REMOVE_USER, SET_DID_TRY_AUTO_LOGIN} from './types';

export const authenticate = (authData: IState_User) => ({
  type: DO_AUTHENTICATE,
  payload: authData,
});
export const setDidTryAutoLogin = () => ({
  type: SET_DID_TRY_AUTO_LOGIN,
});
export const removeUser = () => ({type: REMOVE_USER});
