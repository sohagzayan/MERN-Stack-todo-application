import {combineReducers} from 'redux'
import userReducer from './userReducer';
import getTaskReducer from './getTaskReducer';
import loadingReducer from './loadingReducer';
import closeModalReducer from './closeModalReducer';
import isLogInReducer from './isLogInReducer';
import authReducer from './authReducer';
import relationalReducer from './relationalReducer';

const rootReducer = combineReducers({
          userReducer,
          getTaskReducer,
          loadingReducer,
          closeModalReducer,
          authReducer,
          isLogInReducer,
          relationalReducer
})

export default rootReducer