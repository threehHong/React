/* 
Custom Hook
1. 사용자 정의 훅(훅 - 특정 기능을 수행하는 함수).
   * 쉽게 사용자 정의 함수라 생각하기.

2.
function use훅이름() {
  원하는 기능 로직 or 다른 hook
}
*/

import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from './component/useInput';

const Div = styled.div`
    margin: 20px;
`;  

function displayMessage(message) {
  alert(message);
}

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput("여기에 입력하세요", displayMessage);

  return (
    <Div>  
      <h1> useInput </h1>
      <input value={inputValue} onChange={handleChange}/>
      <button onClick={handleSubmit}> 확인 </button>
    </Div>
  );
}

export default App;
