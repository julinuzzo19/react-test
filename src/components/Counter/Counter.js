import {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: green;
  text-align: center;
`;

const Button = styled.button`
  width: 50px;
`;

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (e) => {
    e.target.value === 'sum' ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <Container>
      <h2>Contador: {counter}</h2>

      <Button value='minus' onClick={handleCounter}>
        -
      </Button>
      <Button value='sum' onClick={handleCounter}>
        +
      </Button>
    </Container>
  );
};

export default Counter;
