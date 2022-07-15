import {combineReducers} from 'redux'
import userReducer from './userReducer';
import getTaskReducer from './getTaskReducer';
import loadingReducer from './loadingReducer';
import closeModalReducer from './closeModalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
          userReducer,
          getTaskReducer,
          loadingReducer,
          closeModalReducer,
          authReducer
})

export default rootReducer