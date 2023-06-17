import { useState } from 'react';

function Count () {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  }

  const decrement = () => {
    setNumber(number + 1);
  }

  return (
    <div>
      <p> count : {number} </p>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement} > Decrement </button>
    </div>
  ) 
}

function App() {
  return (
    <Count />
  )
}

export default App;



/*
// props를 사용한 방법(위의 방법이 더 좋다 - props를 사용하지 않아도 되므로). 
function Count ( {number, setNumber} ) {
  const [number, setNumber] = useState(1);

  const increment = () => {
    setNumber(number + 1);
  }

  const decrement = () => {
    setNumber(number + 1);
  }

  return (
    <div>
      <p> count : {number} </p>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement} > Decrement </button>
    </div>
  ) 
}

function App() {
  const [number, setNumber] = useState(1);

  return (
    <Count number={number} setNumber={setNumber} />
  )
} 
*/