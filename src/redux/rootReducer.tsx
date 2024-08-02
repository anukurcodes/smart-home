import {combineReducers} from 'redux';
import userReducer from './user/reducers';
import miscReducer from './misc/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  misc: miscReducer,
});

export default rootReducer;
