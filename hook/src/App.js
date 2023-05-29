/* 
Custom Hook
1. 사용자 정의 훅

2.
function use훅이름() {
  원하는 기능 로직 or 다른 hook 사용
}
*/

import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 20px;
`;  

function App() {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e) => {
    setInputValue(e.tartget.value);
  }

  return (
    <Div>  
      <h1> useInput </h1>
      <input value={inputValue} onChange={handleChange}/>
      <button> 확인 </button>
    </Div>
  );
}

export default App;
