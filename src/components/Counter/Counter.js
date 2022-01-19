import {useState} from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (e) => {
    e.target.value === 'sum' ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <>
      <h2>Contador: {counter}</h2>

      <button value='sum' onClick={handleCounter}>
        +
      </button>
      <button value='minus' onClick={handleCounter}>
        -
      </button>
    </>
  );
};

export default Counter;
