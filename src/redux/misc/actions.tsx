import {ICredentials, IUserRegisterationPayload} from '../../interfaces';
import {
  DO_LOGIN,
  DO_LOGOUT,
  DO_REGISTER,
  LOGIN_SUCCESSS,
  REGISTRATION_SUCCESS,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
} from './types';

export const startLoading = () => ({type: START_LOADING});
export const stopLoading = () => ({type: STOP_LOADING});

export const doRegisterUser = (payload: IUserRegisterationPayload) => ({
  type: DO_REGISTER,
  payload,
});
export const setRegistered = (status?: boolean | null) => ({
  type: REGISTRATION_SUCCESS,
  payload: status,
});

export const doLogin = (credentials: ICredentials) => ({
  type: DO_LOGIN,
  payload: credentials,
});
export const loginSuccess = () => ({type: LOGIN_SUCCESSS});
export const doLogout = () => ({type: DO_LOGOUT});

export const setError = (msg: string) => ({type: SET_ERROR, payload: msg});
