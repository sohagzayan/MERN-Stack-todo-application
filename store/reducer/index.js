import {combineReducers} from 'redux'
import userReducer from './userReducer';
import getTaskReducer from './getTaskReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
          userReducer,
          getTaskReducer,
          loadingReducer
})

export default rootReducer