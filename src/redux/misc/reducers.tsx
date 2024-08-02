import {IAction, IState_Misc} from '../../interfaces';
import {removeUserDatafromStorage} from '../../utils/utils';
import {
  DO_LOGOUT,
  LOGIN_SUCCESSS,
  REGISTRATION_SUCCESS,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
} from './types';

const initState: IState_Misc = {
  isLoading: false,
  isLoggedIn: false,
  error: '',
  isUserRegistered: false,
};

const miscReducer = (state: IState_Misc = initState, action: IAction) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isUserRegistered: action.payload ?? null,
      };
    case LOGIN_SUCCESSS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case DO_LOGOUT:
      removeUserDatafromStorage();
      return {...state, isLoggedIn: false};
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default miscReducer;
