/* 
Custom Hook
1. 사용자 정의 훅

2.
function use훅이름() {
  원하는 기능 로직 or 다른 hook
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
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    alert(inputValue);
    setInputValue('');
  }

  return (
    <Div>  
      <h1> useInput </h1>
      <input value={inputValue} onChange={handleChange}/>
      <button onClick={handleSubmit}> 확인 </button>
    </Div>
  );
}

export default App;
