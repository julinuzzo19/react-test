import {useReducer} from 'react';
import styled from 'styled-components';
import {counterReducer} from '../../reducers/counterReducer';
import {DECREMENT, INCREMENT, RESET} from '../../types/counterTypes';

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
  const initialState = {counter: 0};
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <Container>
      <h2>Contador: {state.counter}</h2>

      <Button value='minus' onClick={() => dispatch({type: DECREMENT})}>
        -
      </Button>
      <Button value='sum' onClick={() => dispatch({type: INCREMENT})}>
        +
      </Button>
      <Button value='reset' onClick={() => dispatch({type: RESET})}>
        Reset
      </Button>
    </Container>
  );
};

export default Counter;
