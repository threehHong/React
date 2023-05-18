/* 
useCallback() 내부의 콜백 함수를 메모리에 저장해서 

컴포넌트가 반복적으로 렌더링 되어도 다시 계산하지 않고 저장된 메모리에서 꺼내와 재사용하게 해주는 hook(컴포넌트의 성능 최적화(optimization)에 사용되는 Hook).

(컴포넌트의 성능 최적화(optimization)에 사용되는 Hook).
*/

import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 20px;
  `;

function App() {
  
  const [number, setNumber] = useState(0);  
  const [toggle, setToggle] = useState(true);

 /*  const someFunction = () => { // 객체 타입이므로 someFunction에 저장되는 함수는 특정 주소에 저장되고 이 값은 App 컴포넌트가 렌더링 될때 마다 바뀐다(따라서 input태그 토글로 숫자를 증가 시키면 someFunction의 저장 경로가 바뀌어 useEffect() 함수가 실행된다, useEffect()가 실행 되지 않게 하기 위해서 someFunction을 useCallback으로 감싼다 - 아래 참고).
    console.log(`someFunc: number: ${number}`);
    return; 
  } */

  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
  }, [number]); // number 변수를 넣을 경우
  

  useEffect(() => {
    console.log("someFunction이 변경되었습니다")
  }, [someFunction])

  return (
    <Div> 
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />

      <button onClick={() => setToggle(!toggle)}> {toggle.toString()} </button>
      
      <button onClick={someFunction}> Call someFunc </button>
    </Div>
  );
}

export default App;
