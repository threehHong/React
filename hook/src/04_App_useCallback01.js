/* 
useCallback(함수를 메모이제이션)
useCallback() 콜백 함수 자체를 메모리에 저장해서 컴포넌트가 렌더링 될 때 저장된 메모리에서 콜백 함수를 꺼내와 재사용하게 해주는 hook.
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

      {/* 이 버튼을 눌러 App 컴포넌트가 다시 렌더링 되어도 someFunction 함수가 실행되지 않는다(useCallback 함수를 사용했기 떄문). */}
      <button onClick={() => setToggle(!toggle)}> {toggle.toString()} </button>
      
      {/* 클릭시 someFunction 함수 호출 이 함수는 useCallback에 저장된 함수의 내용이 저장된 함수(현재 input에 입력된 값을 확인하는 콘솔 출력) */}
      <button onClick={someFunction}> Call someFunc </button>
    </Div>
  );
}

export default App;
