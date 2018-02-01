import { combineReducers } from 'redux';
import userDetailsReducer from './User_reducer';

const rootReducer = combineReducers({
  userDetailsReducer: userDetailsReducer
});

export default rootReducer;
