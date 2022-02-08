import axios from 'axios';
import {User} from '../interfaces/User';
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USERS_FAILURE,
  POST_USERS_SUCCESS
} from '../types';

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

export const postUsers = (user: User) => {
  return (dispatch: any) => {
    axios
      .post(`http://localhost:3000/api/users/${user.id}`, user)
      .then(res => {
        dispatch({
          type: POST_USERS_SUCCESS,
          payload: {data: res.data.data, message: res.data.message}
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({type: POST_USERS_FAILURE, payload: err});
      });
  };
};
