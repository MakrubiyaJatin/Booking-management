import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  booking: bookingReducer,
});

export default rootReducer;
