import axios from 'axios';
import {User} from '../interfaces/User';
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USER_FAILURE,
  POST_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_SUCCESS
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
          type: POST_USER_SUCCESS,
          payload: {data: res.data.data, message: res.data.message}
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({type: POST_USER_FAILURE, payload: err});
      });
  };
};

export const deleteUser = (id: number) => {
  return (dispatch: any) => {
    axios
      .delete(`http://localhost:3000/api/users/${id}`)
      .then(res => {
        dispatch({type: DELETE_USER_SUCCESS, payload: res.data.message});
      })
      .catch(err => {
        dispatch({type: DELETE_USER_FAILURE, payload: err});
      });
  };
};

export const updateUser = (user: User) => {
  return (dispatch: any) => {
    axios
      .put(`http://localhost:3000/api/users/${user.id}`, user)
      .then(res => {
        dispatch({type: UPDATE_USER_SUCCESS, payload: res.data.message});
      })
      .catch(err => {
        dispatch({type: UPDATE_USER_FAILURE, payload: err.data.message});
      });
  };
};

export const getUserById = (id: number) => {
  return (dispatch: any) => {
    axios
      .get(`http://localhost:3000/api/users/${id}`)
      .then(res => {
        dispatch({type: GET_USER_BY_ID_SUCCESS, payload: res.data.data});
      })
      .catch(err => {
        dispatch({type: GET_USER_BY_ID_FAILURE, payload: err});
      });
  };
};
