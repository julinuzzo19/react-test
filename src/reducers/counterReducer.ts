import {DECREMENT, INCREMENT, RESET} from '../types';

const initialState = {counter: 0};

interface Action {
  type: string;
  payload: any;
}

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return {counter: state.counter + 1};
    case DECREMENT:
      return {counter: state.counter - 1};
    case RESET:
      return {counter: 0};

    default:
      return state;
  }
};

export default counterReducer;
