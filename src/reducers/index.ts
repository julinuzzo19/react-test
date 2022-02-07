import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

export const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof reducers>;
