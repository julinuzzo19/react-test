import React from 'react';
import {useSelector, useDispatch, DefaultRootState} from 'react-redux';
// import styled from 'styled-components';
import {decrement, increment, reset} from '../../actions/counterActions';
import {RootState} from '../../reducers';

// const Container = styled.div`
//   color: green;
//   text-align: center;
// `;

// const Button = styled.button`
//   width: 50px;
// `;

const Counter = () => {
  // const [counter, setCounter] = useState(0);

  // const handleCounter = (e) => {
  //   e.target.value === 'sum' ? setCounter(counter + 1) : setCounter(counter - 1);
  // };

  // const [state, dispatch] = useReducer(counterReducer);

  const counter: DefaultRootState = useSelector(
    (state: RootState) => state.counter.counter
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador: {counter}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
