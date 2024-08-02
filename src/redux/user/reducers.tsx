import {IAction, IState_User} from '../../interfaces';
import {DO_AUTHENTICATE, REMOVE_USER, SET_DID_TRY_AUTO_LOGIN} from './types';

const initialState: IState_User = {
  token: '',
  userData: {name: '', email: '', userId: '', signup_dt: ''},
  didTryAutoLogin: false,
};

const userReducer = (state: IState_User = initialState, action: IAction) => {
  switch (action.type) {
    case DO_AUTHENTICATE:
      return {
        ...state,
        ...action.payload,
        didTryAutoLogin: true,
      };
    case SET_DID_TRY_AUTO_LOGIN:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    case REMOVE_USER:
      return {...initialState};
    default:
      return {...state};
  }
};

export default userReducer;
