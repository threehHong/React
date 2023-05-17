// useEffect - cleanup(timer)

import './App.css';
import React, { useState, useEffect } from 'react';
import Timer from './component/Timer';
 
function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div> 
      {showTimer && <Timer />} {/* 단축평가, showTimer가 true일 떄만 타이머를 보여주겠다라는 */}
      <button onClick={() => setShowTimer(!showTimer)}> Toggle Timer </button>
    </div>
  );
}

export default App;
