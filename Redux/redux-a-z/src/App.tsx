import React from 'react';
import './App.css';

type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

// 구조분해 할당.
function App({value, onIncrement, onDecrement}: Props) {
  return (
    <div className="App">
      clicked: {value} times

      <button onClick={onIncrement}>
        +
      </button>

      <button onClick={onDecrement}>
        -
      </button>
    </div>
  );
}

export default App;
