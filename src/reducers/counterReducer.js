import {DECREMENT, INCREMENT, RESET} from '../types/counterTypes';

export const counterReducer = (state, action) => {
  console.log(state, action);
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
