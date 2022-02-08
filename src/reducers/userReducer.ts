import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS
} from './../types';

const initialState: any = {data: [], loading: true, error: false, message: ''};

interface Action {
  type: string;
  payload: any;
}

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {...state, data: [...action.payload], loading: false, error: false};
    case GET_USERS_FAILURE:
      return {...state, message: action.payload, loading: false, error: true};
    case POST_USER_SUCCESS: {
      return {
        data: [...state.data, action.payload.data],
        message: action.payload,
        loading: false,
        error: false
      };
    }
    case POST_USER_FAILURE:
      return {...state, message: action.payload, error: true};

    case DELETE_USER_SUCCESS:
      return {...state, message: action.payload};
    case DELETE_USER_FAILURE:
      return {...state, message: action.payload, err: true};
    case GET_USER_BY_ID_SUCCESS:
      return {...state, data: [action.payload], err: false};
    case GET_USER_BY_ID_FAILURE:
      return {...state, message: action.payload, err: true};
    case UPDATE_USER_SUCCESS:
      return {...state, message: action.payload, err: false};
    case UPDATE_USER_FAILURE:
      return {...state, message: action.payload, err: true};

    default:
      return state;
  }
};

export default userReducer;
