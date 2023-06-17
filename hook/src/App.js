import { useState } from 'react';

function Count() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);  
  }

  const decrement = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <p> Count : {number} </p>
      <button onClick={increment} > Increment </button>
      <button onClick={decrement}> Decrement </button>
    </div>
  )
}

function App() {
  return (
    <Count />
  )
}

export default App;


