import { combineReducers } from 'redux';
import roomReducer from './createRoom';
import registerReducer from './register';
import loginReducer from './login';
import sessionReducer from './session';
import coursesReducer from './courses'
import coursesTakenReducer from './courseTaken';

export default combineReducers({
  roomReducer,
  registerReducer,
  loginReducer,
  sessionReducer,
  coursesReducer,
  coursesTakenReducer,
});
