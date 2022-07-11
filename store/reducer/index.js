import {combineReducers} from 'redux'
import userReducer from './userReducer';
import getTaskReducer from './getTaskReducer';
import loadingReducer from './loadingReducer';
import closeModalReducer from './closeModalReducer';

const rootReducer = combineReducers({
          userReducer,
          getTaskReducer,
          loadingReducer,
          closeModalReducer
})

export default rootReducer