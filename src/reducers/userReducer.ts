import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USERS_SUCCESS,
  POST_USERS_FAILURE
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
    case POST_USERS_SUCCESS: {
      return {
        data: [...state.data, action.payload.data],
        message: action.payload,
        loading: false,
        error: false
      };
    }
    case POST_USERS_FAILURE:
      return {...state, message: action.payload, loading: false, error: true};
    default:
      return state;
  }
};

export default userReducer;
