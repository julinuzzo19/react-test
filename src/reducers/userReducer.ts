import {useEffect} from 'react';
import {GET_USERS_SUCCESS, GET_USERS_FAILURE} from './../types/index';
import {User} from '../interfaces/User';
import {} from '../types';

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
    default:
      return state;
  }
};

export default userReducer;
