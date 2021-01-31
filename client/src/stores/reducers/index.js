import { combineReducers } from 'redux';
import authReducer from './authReducer';
import execReducer from './execReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    execution: execReducer
  });
  
  export default rootReducer;