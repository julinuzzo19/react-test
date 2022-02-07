import {useEffect} from 'react';
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USERS_SUCCESS,
  POST_USERS_FAILURE
} from './../types';
import {User} from '../interfaces/User';

const initialState: any = {data: [], loading: true};

interface Action {
  type: string;
  payload: any;
}

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {data: [...action.payload], loading: false};
    case GET_USERS_FAILURE:
      return {data: action.payload, loading: false};
    case POST_USERS_SUCCESS:
      return {message: [action.payload], loading: false};
    case POST_USERS_FAILURE:
      return {message: action.payload, loading: false};
    default:
      return state;
  }
};

export default userReducer;
