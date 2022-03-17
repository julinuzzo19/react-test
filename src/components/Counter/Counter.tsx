import React from 'react';
import {useSelector, useDispatch, DefaultRootState} from 'react-redux';
import styled from 'styled-components';
import {decrement, increment, reset} from '../../actions/counterActions';
import {RootState} from '../../reducers';

const Container = styled.div`
  color: black;
  text-align: center;
`;

const Button = styled.button`
  width: 50px;
`;

const Counter = () => {
  const counter: DefaultRootState = useSelector(
    (state: RootState) => state.counter.counter
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <h2>Contador: {counter}</h2>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
    </Container>
  );
};

export default Counter;
