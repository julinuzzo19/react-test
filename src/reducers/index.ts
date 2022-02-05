import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

export const reducers = combineReducers({
  counter: counterReducer
});

export type RootState = ReturnType<typeof reducers>