import axios from 'axios';
import {GET_USERS_SUCCESS, GET_USERS_FAILURE} from '../types';

export const getUsers = () => {
  return (dispatch: any) => {
    axios
      .get('http://localhost:3000/api/users/')
      .then(res => {
        console.log(res);
        dispatch({type: GET_USERS_SUCCESS, payload: res.data.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: GET_USERS_FAILURE, payload: err});
      });
  };
};
