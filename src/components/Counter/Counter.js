// import {} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import {decrement, increment, reset} from '../../actions/counterActions';

const Container = styled.div`
  color: green;
  text-align: center;
`;

const Button = styled.button`
  width: 50px;
`;

const Counter = () => {
  // const [counter, setCounter] = useState(0);

  // const handleCounter = (e) => {
  //   e.target.value === 'sum' ? setCounter(counter + 1) : setCounter(counter - 1);
  // };

  // const [state, dispatch] = useReducer(counterReducer);

  const {counter} = useSelector(state => state);

  const dispatch = useDispatch();

  return (
    <Container>
      <h2>Contador: {counter.counter}</h2>
      {console.log(counter)}
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
    </Container>
  );
};

export default Counter;
